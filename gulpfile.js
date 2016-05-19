"use strict";

//******************************************************************************
//* DEPENDENCIES
//******************************************************************************
var gulp        = require("gulp"),
    tslint      = require("gulp-tslint"),
    tsc         = require("gulp-typescript"),
    runSequence = require("run-sequence");

//******************************************************************************
//* LINT
//******************************************************************************
gulp.task("lint", function() {
    
    var config =  { emitError: (process.env.CI) ? true : false };
    
    return gulp.src([
        "inversify*/*.ts"
    ])
    .pipe(tslint())
    .pipe(tslint.report("verbose", config));
});

//******************************************************************************
//* COMPILE
//******************************************************************************
var tsTypeDefinitionsProject = tsc.createProject("tsconfig.json");

gulp.task("build", function() {
  return gulp.src("inversify*/*.ts")
             .pipe(tsc(tsTypeDefinitionsProject))
             .on("error", function (err) {
                 process.exit(1);
             })
             .js.pipe(gulp.dest("temp/"));
});

//******************************************************************************
//* DEFAULT
//******************************************************************************
gulp.task("default", function (cb) {
  runSequence("lint", "build", cb);
});