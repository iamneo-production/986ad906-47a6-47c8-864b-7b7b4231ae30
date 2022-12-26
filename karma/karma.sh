#!/bin/bash
cp /home/coder/project/workspace/karma/karma.conf.js /home/coder/project/workspace/webapp/karma.conf.js;
cp /home/coder/project/workspace/karma/header.component.spec.ts /home/coder/project/workspace/webapp/src/app/header/header.component.spec.ts;
cd /home/coder/project/workspace/webapp/;
npm test;