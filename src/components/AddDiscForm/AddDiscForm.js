import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Required, Label } from '../Form/Form';
import AuthApiService from '../../services/auth-api-service';
import cx from 'classnames';
import styles from './AddDiscForm.scss';

class AddDiscForm extends Component {
    state = {
      error: null,
      imgSrc: null
    };
  
    firstInput = React.createRef();
  
    beginUpload = e => {
      e.preventDefault();
  
      const uploadOptions = {
        cloudName: 'mmpr',
        uploadPreset: 'upload',
        resourceType: 'image',
        multiple: false,
        theme: 'minimal',
        maxImageFileSize: 1500000 //1.5MB
      };
  
      openUploadWidget(uploadOptions, (error, photos) => {
        if (!error) {
          if (photos.event === 'success') {
            this.setState({
              imgSrc: photos.info.secure_url
            });
          }
        } else {
        }
      });
    };
  
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
            alt="Uploaded Disc"
          />
        );
      }
      return image;
    }
  
    handleSubmit = e => {
    //   e.preventDefault();
    //   const { name, username, password, zip, email } = e.target;
  
    //   let img_src = '';
    //   let img_alt = '';
  
    //   if (this.state.imgSrc) {
    //     img_src = this.state.imgSrc;
    //     img_alt = `${username.value} Profile Picture`;
    //   } else if (!this.state.imgSrc) {
    //     img_src =
    //       'https://res.cloudinary.com/mmpr/image/upload/v1588908186/user_knxeok.png';
    //     img_alt = 'Default Profile';
      }
  
      DiscApiService.postDisc({
        // name: name.value,
        // username: username.value,
        // password: password.value,
        // zip: zip.value,
        // email: email.value,
        // img_src,
        // img_alt
      })
        .then(disc => {
        //   name.value = '';
        //   username.value = '';
        //   password.value = '';
        //   zip.value = '';
        //   email.value = '';
        //   this.props.onRegistrationSuccess();
        })
        .catch(res => {
          this.setState({ error: res.error });
        });
    };
  
    render() {
      const { error } = this.state;
      return (
        <form
          onSubmit={e => {
            this.setState({ isRegistering: true });
            this.handleSubmit(e);
          }}
          className={styles.AddDiscForm}
          autoComplete="off">
          <div role="alert">{error ? <p>{error}</p> : null}</div>
          <h2 className={styles.addDiscHeader}>Sign Up</h2>
          <div className={styles.inputContainer}>
            <div className={styles.addDiscDiv}>
              <Label
                htmlFor="disc-name-input"
                className={styles.addDiscLabel}>
                <span className={styles.fullInputPhrase}>Enter disc</span> name:
                <Required />
              </Label>
              <Input
                ref={this.firstInput}
                id="disc-name-input"
                name="disc-name"
                placeholder="Beat in Star Wraith"
                className={styles.regInput}
                required
                maxLength="30"
                autoComplete="off"
              />
            </div>
            <div className={styles.addDiscDiv}>
              <Label
                htmlFor="disc-brand-input"
                className={styles.addDiscLabel}>
                <span className={styles.fullInputPhrase}>Select a</span> brand:
                <Required />
              </Label>
              <Input
                id="disc-brand-input"
                name="brand"
                placeholder="Innova"
                className={styles.addDiscInput}
                required
                maxLength="20"
                autoComplete="off"
              />
            </div>
            <div className={styles.addDiscDiv}>
              <Label
                htmlFor="disc-mold-input"
                className={styles.addDiscLabel}>
                <span className={styles.fullInputPhrase}>Enter disc</span> mold:
                <Required />
              </Label>
              <Input
                id="disc-mold-input"
                name="mold"
                placeholder="Wraith"
                className={styles.addDiscInput}
                required
                autoComplete="off"
              />
            </div>
            <div className={styles.addDiscDiv}>
              <Label
                htmlFor="disc-mold-input"
                className={styles.addDiscLabel}>
                <span className={styles.fullInputPhrase}>Enter disc</span> mold:
                <Required />
              </Label>
              <Input
                id="disc-mold-input"
                name="mold"
                placeholder="Wraith"
                className={styles.addDiscInput}
                required
                autoComplete="off"
              />
            </div>
            <div className={styles.addDiscDiv}>
              <Label
                htmlFor="disc-type-select"
                className={styles.addDiscLabel}>
                <span className={styles.fullInputPhrase}>Select disc</span> type:
                <Required />
              </Label>
              <select
                id="disc-type-select"
                name="type"
                className={styles.addDiscSelect}
              >
                <option value='Putter'>Putter</option>
                <option value='Midrange'>Midrange</option>
                <option value='Fairway'>Fairway Driver</option>
                <option value='Control'>Control Driver</option>
                <option value='Distance'>Distance Driver</option>
              </select>
            </div>
            <div className={styles.addDiscDiv}>
              <Label
                htmlFor="disc-plastic-input"
                className={styles.addDiscLabel}>
                <span className={styles.fullInputPhrase}>Enter disc</span> plastic:
                <Required />
              </Label>
              <Input
                id="disc-plastic-input"
                name="plastic"
                placeholder="Star"
                className={styles.addDiscInput}
                required
                autoComplete="off"
              />
            </div>
            <div className={styles.addDiscDiv}>
              <Label
                htmlFor="disc-stability-select"
                className={styles.addDiscLabel}>
                <span className={styles.fullInputPhrase}>Select disc</span> stability:
                <Required />
              </Label>
              <select
                id="disc-stability-select"
                name="stability"
                className={styles.addDiscSelect}
              >
                <option value='Stable'>Stable</option>
                <option value='Over'>Overstable</option>
                <option value='Under'>Understable</option>
                <option value='VeryOver'>Very Overstable</option>
                <option value='VeryUnder'>Very Understable</option>
              </select>
            </div>
            <div className={styles.uploadContainer}>
              <button
                className={styles.uploadButton}
                onClick={e => this.beginUpload(e)}>
                <span className={styles.uploadText}>Upload Disc Photo</span>
              </button>
              {this.displayPreview()}
            </div>
          </div>
          <footer className="reg-footer">
            <button>
              type="submit"
                <span className="buttonText">Submit</span>
            </button>{' '}
          </footer>
        </form>
      );
    }
  
export default AddDiscForm;