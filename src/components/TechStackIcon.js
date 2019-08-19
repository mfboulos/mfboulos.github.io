import React from 'react';
import java from '../static/java.png';
import junit from '../static/junit.png';
import spring from '../static/spring.svg';
import maven from '../static/maven.png';
import javascript from '../static/javascript.png';
import oraclesql from '../static/oraclesql.png';
import mongodb from '../static/mongodb.svg';
import python from '../static/python.png';
import angular from '../static/angular.svg';
import corenlp from '../static/corenlp.png';
import eclipse from '../static/eclipse.png';
import vscode from '../static/vscode.ico';
import postman from '../static/postman.png';
import bitbucket from '../static/bitbucket.svg';
import docker from '../static/docker.png';
import git from '../static/git.png';
import github from '../static/github.svg';
import jira from '../static/jira.jpg';
import opengl from '../static/opengl.png';
import cpp from '../static/cpp.png';
import neo4j from '../static/neo4j.png';
import c from '../static/c.png';
import css from '../static/css.png';
import html from '../static/html.jpg';
import reactLogo from '../static/react.svg';
import aws from '../static/aws.png';
import jenkins from '../static/jenkins.png';

class TechStackIcon extends React.Component {
    icons = {
        java: java,
        junit: junit,
        spring: spring,
        maven: maven,
        javascript: javascript,
        oraclesql: oraclesql,
        mongodb: mongodb,
        python: python,
        angular: angular,
        corenlp: corenlp,
        eclipse: eclipse,
        vscode: vscode,
        postman: postman,
        bitbucket: bitbucket,
        docker: docker,
        git: git,
        github: github,
        jira: jira,
        opengl: opengl,
        c: c,
        cpp: cpp,
        neo4j: neo4j,
        css: css,
        html: html,
        react: reactLogo,
        aws: aws,
        jenkins: jenkins
    };

    render() {
        let tech = this.props.tech.toLowerCase()
        if (tech === 'c++') {
            tech = 'cpp'
        }
        let file = this.icons[tech]

        if (file) {
            return (
                <img src={file} style={{height: '80px', margin: '10px'}}
                title={this.props.tech} alt={this.props.tech} />
            )
        }
        else {
            return <span style={{fontSize: 20}}>{this.props.tech}</span>
        }
    }
}

export default TechStackIcon;