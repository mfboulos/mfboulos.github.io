import React from 'react';
import java from '../static/java.png';
import junit from '../static/junit.png';
import spring from '../static/spring.svg';
import maven from '../static/maven.png';
import javascript from '../static/javascript.png';
import sql from '../static/oraclesql.png';
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
import jira from '../static/jira.png';
import opengl from '../static/opengl.png';
import cpp from '../static/cpp.png';
import neo4j from '../static/neo4j.png';
import c from '../static/c.png';
import css from '../static/css.png';
import html from '../static/html.png';
import reactLogo from '../static/react.svg';
import aws from '../static/aws.png';
import jenkins from '../static/jenkins.png';
import hibernate from '../static/hibernate.png';
import twilio from '../static/twilio.svg';
import npm from '../static/npm.png';
import gradle from '../static/gradle.png';
import intellij from '../static/intellij.png';
import ignition from '../static/ignition.png';
import materialui from '../static/materialui.png';
import webpack from '../static/webpack.png';

class TechStackIcon extends React.Component {
    static icons = {
        python: python,
        java: java,
        c: c,
        cpp: cpp,
        javascript: javascript,
        react: reactLogo,
        css: css,
        html: html,
        junit: junit,
        spring: spring,
        maven: maven,
        npm: npm,
        webpack: webpack,
        aws: aws,
        jenkins: jenkins,
        gradle: gradle,
        sql: sql,
        mongodb: mongodb,
        neo4j: neo4j,
        angular: angular,
        corenlp: corenlp,
        vscode: vscode,
        eclipse: eclipse,
        intellij: intellij,
        postman: postman,
        bitbucket: bitbucket,
        docker: docker,
        git: git,
        github: github,
        jira: jira,
        opengl: opengl,
        materialui: materialui,
        hibernate: hibernate,
        twilio: twilio,
        ignition: ignition
    };

    static niceName(tech) {
        let t = tech.toLowerCase()
        if (t === 'c++' || t === 'cpp') {
            return 'C++'
        }

        let icon = TechStackIcon.icons[t]
        if (icon) {
            if (icon === opengl) {
                return 'OpenGL'
            }
            else if (icon === bitbucket) {
                return 'BitBucket'
            }
            else if (icon === vscode) {
                return 'VSCode'
            }
            else if (icon === corenlp) {
                return 'CoreNLP'
            }
            else if (icon === mongodb) {
                return 'MongoDB'
            }
            else if (icon === javascript) {
                return 'JavaScript'
            }
            else if (icon === junit) {
                return 'JUnit'
            }
            else if (icon === github) {
                return 'GitHub'
            }
            else if (icon === twilio) {
                return 'Twilio API'
            }
            else if (icon === intellij) {
                return 'IntelliJ'
            }
            else if (icon === materialui) {
                return 'Material UI'
            }
            else if (icon === npm) {
                return 'npm'
            }
            else if ([aws, css, html, sql].includes(icon)) {
                return t.toUpperCase()
            }
            else {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }
        }
        else {
            return tech
        }
    }

    static getCategory(tech) {
        let icon = TechStackIcon.getIcon(tech)
        let categories = []

        if ([java, python, javascript, c, cpp, sql].includes(icon)) {
            categories.push('Programming Language')
        }
        if ([sql, mongodb, neo4j, hibernate].includes(icon)) {
            categories.push('Database')
        }
        if ([spring, angular, reactLogo, hibernate, opengl, corenlp, junit, twilio, ignition, materialui, webpack].includes(icon)) {
            categories.push('Frameworks, Libraries, and API\'s')
        }
        if ([maven, gradle, bitbucket, git, github, aws, jenkins, docker, jira, npm].includes(icon)) {
            categories.push('DevOps')
        }
        if ([junit, postman, maven, gradle].includes(icon)) {
            categories.push('Testing')
        }
        if ([eclipse, vscode, intellij].includes(icon)) {
            categories.push('IDE')
        }
        return categories
    }

    static getIcon(name) {
        let tech = name.toLowerCase()
        if (tech === 'c++') {
            tech = 'cpp'
        }
        if (tech.includes('sql')) {
            tech = 'sql'
        }
        if (tech === 'twilio api') {
            tech = 'twilio'
        }
        if (tech === 'material ui') {
            tech = 'materialui'
        }

        return TechStackIcon.icons[tech]
    }

    render() {
        let file = TechStackIcon.getIcon(this.props.tech)

        if (file) {
            return (
                <img src={file} style={{margin: 'auto', borderRadius: '15px', ...this.props.style}}
                title={this.props.title ? this.props.title : this.props.tech} alt={this.props.tech} />
            )
        }
        else {
            return (
                <div style={{fontSize: '3vw', display: 'table', height: '100%', ...this.props.style}}>
                    <div style={{display: 'table-cell', verticalAlign: 'middle', color: 'white', textAlign: 'center'}}>
                        No icon available
                    </div>
                </div>
            )
        }
    }
}

export default TechStackIcon;