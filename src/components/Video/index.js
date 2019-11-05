import React from 'react';

import { connect } from "react-redux";

const Video = ({ activeModule, activeLesson }) => (
    <div>
        <strong>Módulo X {activeModule.title}</strong>
        <span>Aula X {activeLesson.title}</span>
        </div>
        );

        export default connect(state => ({
            activeModule: state.course.activeModule,
            activeLesson: state.course.activeLesson,
        }))(Video);
