import React from 'react';
import "./App.css";
import Header from './Header';
import Image from './Image';
import Row from './Row';
import Field from './Field';

interface ContainerProps {
    formData: {
        firstName: string;
        lastName: string;
        dob: string;
        sex: string;
        exp: string;
        cref: string;
        class: string;
        pref: string;
    };
}

const Container: React.FC<ContainerProps> = ({ formData }) => (
    <div className="idcard-container">
        <Header />
        <div className="idcard-wrapper">
            <Image letters={`${formData.firstName.charAt(0).toUpperCase()}${formData.lastName.charAt(0).toUpperCase()}`} sex={formData.sex} />
            <div className="idcard-content">
                <Row>
                    <Field label="FIRST NAME" value={formData.firstName} />
                    <Field label="DOB" value={formData.dob} />
                    <Field label="EXP" value={formData.exp} />
                    <Field label="CLASS" value={formData.class} />
                </Row>
                <Row>
                    <Field label="LAST NAME" value={formData.lastName} />
                    <Field label="SEX" value={formData.sex} />
                    <Field label="CREF" value={formData.cref} />
                    <Field label="PREF" value={formData.pref} />
                </Row>
            </div>
        </div>
    </div>
);

export default Container;
