import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Input, Required, Label } from '../Form/Form';
import CourseApiService from '../../services/course-api-service';
// import cx from 'classnames';
import styles from './AddCourseForm.module.scss';

class AddCourseForm extends Component {
    state = {
      error: null,
      imgSrc: null,
      type: 'Putter',
      stability: 'Stable',
      primary_color: 'Red',
      secondary_color: 'None',
      speed: '7',
      glide: '5',
      turn: '-1',
      fade: '3'
    };
  
    firstInput = React.createRef();
  
    // beginUpload = e => {
    //   e.preventDefault();
  
    //   const uploadOptions = {
    //     cloudName: 'mmpr',
    //     uploadPreset: 'upload',
    //     resourceType: 'image',
    //     multiple: false,
    //     theme: 'minimal',
    //     maxImageFileSize: 1500000 //1.5MB
    //   };
  
    //   openUploadWidget(uploadOptions, (error, photos) => {
    //     if (!error) {
    //       if (photos.event === 'success') {
    //         this.setState({
    //           imgSrc: photos.info.secure_url
    //         });
    //       }
    //     } else {
    //     }
    //   });
    // };
  
    displayPreview() {
      let image;
  
      if (this.state.imgSrc === null) {
        image = (
          <img
            className={styles.defaultImage}
            src="https://image.flaticon.com/icons/svg/166/166277.svg"
            alt="default"
          />
        );
      } else if (this.state.imgSrc) {
        image = (
          <img
            className={styles.uploadedImage}
            src={this.state.imgSrc}
            alt="Uploaded Course"
          />
        );
      }
      return image;
    }
  
    handleSubmit = e => {
      e.preventDefault();
      const { name, brand, mold, type, plastic, stability, primary_color, secondary_color, speed, glide, turn, fade, notes } = e.target;
  
      // let img_src = '';
      // let img_alt = '';
  
      // if (this.state.imgSrc) {
      //   img_src = this.state.imgSrc;
      //   img_alt = `${username.value} Profile Picture`;
      // } else if (!this.state.imgSrc) {
      //   img_src =
      //     'https://res.cloudinary.com/mmpr/image/upload/v1588908186/user_knxeok.png';
      //   img_alt = 'Default Profile';
      // }
  
      CourseApiService.addCourse({
        name: name.value,
        brand: brand.value,
        mold: mold.value,
        type: type.value,
        plastic: plastic.value,
        stability: stability.value,
        primary_color: primary_color.value,
        secondary_color: secondary_color.value,
        speed: speed.value,
        glide: glide.value,
        turn: turn.value,
        fade: fade.value,
        notes: notes.value
        // img_src,
        // img_alt
      })
        .then(Course => {
          name.value = '';
          brand.value = '';
          mold.value = '';
          type.value = '';
          plastic.value = '';
          stability.value = '';
          primary_color.value = '';
          secondary_color.value = '';
          speed.value = '';
          glide.value = '';
          turn.value = '';
          fade.value = '';
        })
        .catch(res => {
          this.setState({ error: res.error });
        });
     };

     handleSpeedChange = (e) => {
      this.setState({speed: e.target.value})
     };
  
    render() {
      const { error } = this.state;
      return (
        <form
          onSubmit={e => {
            this.setState({ isRegistering: true });
            this.handleSubmit(e);
          }}
          className={styles.addCourseForm}
          autoComplete="off">
          <div role="alert">{error ? <p>{error.message}</p> : null}</div>
          <h2 className={styles.addCourseHeader}>Add Course</h2>
          <div className={styles.inputContainer}>
            <div className={styles.addCourseDiv}>
              <Label
                htmlFor="course-name-input"
                className={styles.addCourseLabel}>
                <span className={styles.fullInputPhrase}>Enter Course</span> name:
                <Required />
              </Label>
              <Input
                ref={this.firstInput}
                id="course-name-input"
                name="name"
                placeholder="Beat in Star Wraith"
                className={styles.addCourseInput}
                required
                maxLength="30"
                autoComplete="off"
              />
            </div>
            <div className={styles.addCourseDiv}>
              <Label
                htmlFor="course-brand-input"
                className={styles.addCourseLabel}>
                <span className={styles.fullInputPhrase}>Enter Course</span> brand:
                <Required />
              </Label>
              <Input
                id="course-brand-input"
                name="brand"
                placeholder="Innova"
                className={styles.addCourseInput}
                required
                maxLength="20"
                autoComplete="off"
              />
            </div>
            <div className={styles.addCourseDiv}>
              <Label
                htmlFor="course-mold-input"
                className={styles.addCourseLabel}>
                <span className={styles.fullInputPhrase}>Enter Course</span> mold:
                <Required />
              </Label>
              <Input
                id="course-mold-input"
                name="mold"
                placeholder="Wraith"
                className={styles.addCourseInput}
                required
                maxLength="20"
                autoComplete="off"
              />
            </div>
            <div className={styles.addCourseDiv}>
              <Label
                htmlFor="course-type-select"
                className={styles.addCourseLabel}>
                <span className={styles.fullInputPhrase}>Select Course</span> type:
                <Required />
              </Label>
              <select
                id="course-type-select"
                name="type"
                className={styles.addCourseSelect}
              >
                <option value='Putter'>Putter</option>
                <option value='Approach'>Approach</option>
                <option value='Midrange'>Midrange</option>
                <option value='Fairway'>Fairway Driver</option>
                <option value='Control'>Control Driver</option>
                <option value='Distance'>Distance Driver</option>
              </select>
            </div>
            <div className={styles.addCourseDiv}>
              <Label
                htmlFor="course-plastic-input"
                className={styles.addCourseLabel}>
                <span className={styles.fullInputPhrase}>Enter Course</span> plastic:
                <Required />
              </Label>
              <Input
                id="course-plastic-input"
                name="plastic"
                placeholder="Star"
                className={styles.addCourseInput}
                required
                autoComplete="off"
              />
            </div>
            <div className={styles.addCourseDiv}>
              <Label
                htmlFor="course-stability-select"
                className={styles.addCourseLabel}>
                <span className={styles.fullInputPhrase}>Select Course</span> stability:
                <Required />
              </Label>
              <select
                id="course-stability-select"
                name="stability"
                className={styles.addCourseSelect}
              >
                <option value='Stable'>Stable</option>
                <option value='Over'>Overstable</option>
                <option value='Under'>Understable</option>
                <option value='VeryOver'>Very Overstable</option>
                <option value='VeryUnder'>Very Understable</option>
              </select>
            </div>
            <div className={styles.addCourseDiv}>
              <Label
                htmlFor="course-primaryColor-select"
                className={styles.addCourseLabel}>
                <span className={styles.fullInputPhrase}>Select Course</span> primary color:
                <Required />
              </Label>
              <select
                id="course-primaryColor-select"
                name="primary_color"
                className={styles.addCourseSelect}
              >
                <option value='Red'>Red</option>
                <option value='Orange'>Orange</option>
                <option value='Yellow'>Yellow</option>
                <option value='Green'>Green</option>
                <option value='Teal'>Teal</option>
                <option value='Blue'>Blue</option>
                <option value='Purple' >Purple</option>
                <option value='Pink'>Pink</option>
                <option value='White'>White</option>
                <option value='Black'>Black</option>
                <option value='Brown'>Brown</option>
                <option value='Grey'>Grey</option>
              </select>
            </div>
            <div className={styles.addCourseDiv}>
              <Label
                htmlFor="course-secondaryColor-select"
                className={styles.addCourseLabel}>
                <span className={styles.fullInputPhrase}>Select Course</span> secondary color:
                <Required />
              </Label>
              <select
                id="course-secondaryColor-select"
                name="secondary_color"
                className={styles.addCourseSelect}
              >
                <option value='None'>None</option>
                <option value='Red'>Red</option>
                <option value='Orange'>Orange</option>
                <option value='Yellow'>Yellow</option>
                <option value='Green'>Green</option>
                <option value='Teal'>Teal</option>
                <option value='Blue'>Blue</option>
                <option value='Purple'>Purple</option>
                <option value='Pink'>Pink</option>
                <option value='White'>White</option>
                <option value='Black'>Black</option>
                <option value='Brown'>Brown</option>
                <option value='Grey'>Grey</option>
              </select>
            </div>
            <div className={styles.addCourseDiv}>
              <Label
                htmlFor="course-speed-select"
                className={styles.addCourseLabel}>
                <span className={styles.fullInputPhrase}>Select Course</span> speed:
                <Required />
              </Label>
              <select
                id="course-speed-select"
                name="speed"
                className={styles.addCourseSelect}
                value={this.state.speed}
                onChange={this.handleSpeedChange}
              >
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
                <option value='11'>11</option>
                <option value='12'>12</option>
                <option value='13'>13</option>
                <option value='14'>14</option>
              </select>
            </div>
            <div className={styles.addCourseDiv}>
              <Label
                htmlFor="course-glide-select"
                className={styles.addCourseLabel}>
                <span className={styles.fullInputPhrase}>Select Course</span> glide:
                <Required />
              </Label>
              <select
                id="course-glide-select"
                name="glide"
                className={styles.addCourseSelect}
              >
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
              </select>
            </div>
            <div className={styles.addCourseDiv}>
              <Label
                htmlFor="course-turn-select"
                className={styles.addCourseLabel}>
                <span className={styles.fullInputPhrase}>Select Course</span> turn:
                <Required />
              </Label>
              <select
                id="course-turn-select"
                name="turn"
                className={styles.addCourseSelect}
              >
                <option value='1'>1</option>
                <option value='0'>0</option>
                <option value='-1'>-1</option>
                <option value='-2'>-2</option>
                <option value='-3'>-3</option>
                <option value='-4'>-4</option>
                <option value='-5'>-5</option>
              </select>
            </div>
            <div className={styles.addCourseDiv}>
              <Label
                htmlFor="course-fade-select"
                className={styles.addCourseLabel}>
                <span className={styles.fullInputPhrase}>Select Course</span> fade:
                <Required />
              </Label>
              <select
                id="course-fade-select"
                name="fade"
                className={styles.addCourseSelect}
              >
                <option value='0'>0</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>
            </div>
            <div className={styles.addCourseDiv}>
              <Label
                className={styles.addCommentLabel}
                htmlFor="course-notes">
                Add Comment:
              </Label>
              <textarea
                name="notes"
                id="course-notes"
                className={styles.contentInput}
                placeholder="First distance driver I owned and really enjoyed throwing. Fairly beat in."
                rows="10"
                maxLength="500"   
                ></textarea>
              </div>
            {/* <div className={styles.uploadContainer}>
              <button
                className={styles.uploadButton}
                onClick={e => this.beginUpload(e)}>
                <span className={styles.uploadText}>Upload Course Photo</span>
              </button>
              {this.displayPreview()}
            </div> */}
          </div>
          <footer className="reg-footer">
            <button type="submit">
                <span className="buttonText">Submit</span>
            </button>{' '}
          </footer>
        </form>
      );
    }
  }
export default AddCourseForm;