import React, {useState} from 'react';
import {Form, Formik} from 'formik';
import CheckBox from '../../helpers/FormFields/CheckBox';
import TextInput from "../../helpers/FormFields/TextBox";
import SelectField from "../../helpers/FormFields/SelectField";
import * as Yup from 'yup';
import REG_EXP from "../../helpers/RegExp";

const Contact = () => {
    const [acceptedTermsCheck, setAcceptedTermsCheck] = useState(false)

    return (
        <>
            <section id="career-form">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <h1 id="career-grow-heading" className="underline-text">Grow with Us.</h1>
                            <br/>
                            <p id="">
                                We count on the ambition and creativity of our employees and offer them an exciting
                                mix of
                                responsibility and visibility to help us enhance our position as a global
                                agri-business leader. We
                                have an entrepreneurial spirit, so the employees are challenged every day to
                                exemplify our vision
                                through their innovation, dedication, and integrity.
                                We have many locations across India, with each location requiring employees with
                                diverse backgrounds
                                - those with different thoughts, perceptions and skill sets. Our wide reach offers
                                the employees a
                                chance to learn from and share their ideas with talented people all over India. Yet
                                our
                                people-centric culture encourages personal interaction and collaboration so they are
                                always a
                                valued, integral part of the team. With a variety of careers available, the
                                opportunities are
                                endless.</p>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <h1 className="underline-text">Apply Here</h1>
                            <br/>
                            <Formik initialValues={{
                                name: '',
                                email: '',
                                mobile: '',
                                experience: ''
                            }} validationSchema={
                                Yup.object({
                                    name: Yup.string().max(20, '20 Characters are allowed').required('Required'),
                                    email: Yup.string().email('Invalid Email Address'),
                                    mobile: Yup.string().min(10, 'Invalid Mobile Number').matches(REG_EXP.phone, "Invalid Mobile Number").required('Required'),
                                    experience: Yup.string().max(500, '500 Characters are allowed').required('Required'),
                                    passingYear: Yup.string().min(4, 'Must be of 4 Characters').required('Required'),
                                    jobType: Yup.string()
                                        .oneOf(
                                            ['Branch Manager', 'Team Manager', 'Sales Officer', 'Sales Executive'],
                                            'Invalid Job Type'
                                        )
                                        .required('Required'),
                                    acceptedTerms: Yup.boolean()
                                        .required('Required')
                                        .oneOf([true], 'You must accept the terms and conditions.'),
                                })
                            }
                                    onSubmit={async (values, {}) => {

                                    }}>
                                {({handleSubmit, resetForm, isSubmitting, dirty}) => (
                                    <Form onSubmit={handleSubmit}>
                                        <TextInput
                                            label="Name"
                                            name="name"
                                            type="text"
                                            placeholder="Enter Name"
                                        />
                                        <TextInput
                                            label="Email"
                                            name="email"
                                            type="email"
                                            placeholder="Enter Email"
                                        />
                                        <TextInput
                                            label="Mobile Number"
                                            name="mobile"
                                            type="text"
                                            placeholder="Enter Mobile Number"
                                            maxLength="10"
                                            onInput={(object) => {
                                                if (object.target.value.length > object.target.maxLength) {
                                                    object.target.value = object.target.value.slice(0, object.target.maxLength)
                                                }
                                            }}
                                        />
                                        <div className="form-row">
                                            <div className="col">
                                                <TextInput
                                                    type="text"
                                                    name="education"
                                                    label="Educational Qualification"
                                                    placeholder="Current Educational Qualification"/>
                                            </div>
                                            <div className="col">
                                                <TextInput
                                                    type="text"
                                                    label="Passing Year"
                                                    name="passingYear" placeholder="Passing Year"
                                                    maxLength="4"
                                                    onInput={(object) => {
                                                        if (object.target.value.length > object.target.maxLength) {
                                                            object.target.value = object.target.value.slice(0, object.target.maxLength)
                                                        }
                                                    }}/>
                                            </div>
                                        </div>
                                        <SelectField label="Job Type" name="jobType">
                                            <option value="">Select a job type</option>
                                            <option value="Branch Manager">Branch Manager</option>
                                            <option value="Team Manager">Team Manager</option>
                                            <option value="Sales Officer">Sales Officer</option>
                                            <option value="Sales Executive">Sales Executive</option>
                                        </SelectField>
                                        <TextInput
                                            label="Past Experience (if any)"
                                            name="experience"
                                            type="text"
                                            rows="4"
                                            textBoxType="textArea"
                                            placeholder="Enter Past Experience"
                                            maxLength="200"
                                            onInput={(object) => {
                                                if (object.target.value.length > object.target.maxLength) {
                                                    object.target.value = object.target.value.slice(0, object.target.maxLength)
                                                }
                                            }}
                                        />
                                        <CheckBox name="acceptedTerms"
                                                  onClick={() => setAcceptedTermsCheck(!acceptedTermsCheck)}>
                                            &nbsp;&nbsp;I accept that the information provided is best of my
                                            knowledge
                                        </CheckBox>

                                        <button type="submit" className="btn btn-success"
                                                style={{margin: '0 10px 10px 0'}}>Submit
                                        </button>
                                        <button type="reset" disabled={isSubmitting}
                                                className="btn btn-danger"
                                                style={{margin: '0 0px 10px 0'}}>Reset
                                        </button>
                                    </Form>
                                )}
                            </Formik>

                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{
                `
                  #career-form {
                    margin: 4rem 0;
                  }

                  .underline-text {
                    border-bottom: 2px solid black;
                    display: inline-block;
                    margin-bottom: 2rem;
                  }

                `
            }</style>
        </>

    );
};

export default Contact;
