const jsiiJavaRuntime = require('jsii-java-runtime');

process.stdout.write(`<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/POM/4.0.0"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 https://maven.apache.org/xsd/settings-1.0.0.xsd">

    <!-- Generated by ${__filename} at ${new Date().toISOString()} -->

    <profiles>
        <profile>
            <id>local</id>
            <repositories>
                <repository>
                    <id>jsii-runtime</id>
                    <url>file://${jsiiJavaRuntime.repository}</url>
                </repository>
                <repository>
                    <id>jsii-calc</id>
                    <url>file://${process.cwd()}/maven-repo</url>
                </repository>
            </repositories>
        </profile>
    </profiles>
    <activeProfiles>
        <activeProfile>local</activeProfile>
    </activeProfiles>
</settings>
`);
