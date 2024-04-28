import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

import { addCourseAction } from '../../store/courses/actions';
import {
	addAuthorAction,
	deleteAuthorAction,
} from '../../store/authors/actions';

import { getAuthors } from '../../store/selector';

import propTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import styles from './CourseForm.module.css';

import Header from '../Header/Header';
import Input from '../../common/Input/Input';
import AuthorItem from './components/AuthorItem/AuthorItem';
import Button from '../../common/Button/Button';

import formatDuration from '../../helpers/formatDuration';
import getCurrentDate from '../../helpers/getCurrentDate';

const CourseForm = ({ isValid, setIsValid }) => {
	const authors = useSelector(getAuthors);
	const [courseAuthorsList, setCourseAuthorsList] = useState([]);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState(0);
	const [author, setAuthor] = useState({
		id: uuidv4(),
		name: '',
	});
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const authorsList = authors.filter(
		(author) => !courseAuthorsList.find((elem) => author.id === elem.id)
	);
	const handleTitleChange = (event) => {
		const regex = /[A-Za-z]/;
		const value = event.target.value;
		if (regex.test(value) && value.length > 2) setTitle(value);
	};

	const handleDescriptionChange = (event) => {
		const value = event.target.value;
		if (value.length >= 0) setDescription(value);
	};

	const handleDurationChange = (event) => {
		const value = event.target.value;
		if (value > 0) setDuration(value);
	};

	const handleAuthorChange = (event) => {
		const value = event.target.value;
		if (value.length > 2) {
			setAuthor((prevAuthor) => ({
				...prevAuthor,
				name: value,
			}));
		}
	};

	const handleCreateAuthor = () => {
		const newAuthor = {
			id: uuidv4(),
			name: author.name,
		};
		if (newAuthor.name.length > 2) {
			dispatch(addAuthorAction(newAuthor));
		}
	};
	const handleAddAuthor = (authorId) => {
		const editedAuthor = authors.find((author) => author.id === authorId);
		if (editedAuthor) {
			setCourseAuthorsList((prevCourseAuthorsList) => [
				...prevCourseAuthorsList,
				editedAuthor,
			]);
		}
	};

	const handleDeleteAuthor = (authorId) => {
		if (authorId) {
			dispatch(deleteAuthorAction(authorId));
		}
	};

	const handleDeleteCourseAuthor = (authorId) => {
		if (authorId)
			setCourseAuthorsList(
				courseAuthorsList.filter((author) => author.id !== authorId)
			);
	};

	const submitCourse = (event) => {
		event.preventDefault();
		if (!(title && description && duration)) {
			setIsValid(false);
			return;
		}

		const newCourse = {
			id: uuidv4(),
			title,
			description,
			creationDate: getCurrentDate(),
			duration: parseInt(duration),
			authors: courseAuthorsList.map((author) => author.id),
		};
		dispatch(addCourseAction(newCourse));
		navigate('/courses/');
	};

	return (
		<>
			<Header />
			<div className={styles.container}>
				<h1>Course Edit/Create Course</h1>
				<div className={styles.formContainer}>
					<form onSubmit={(e) => submitCourse(e)}>
						<h1>Main info</h1>
						<Input
							type='text'
							name='Title'
							value={title}
							onChange={handleTitleChange}
							isRequired
							placeholderText='Input text'
							isValid={isValid}
						/>
						<div className={styles.descriptionSection}>
							<label>
								<b>Description</b>
							</label>
							<textarea
								placeholder='Input text'
								value={description}
								onChange={handleDescriptionChange}
								required
								className={isValid ? styles.textarea : styles.invalidTextarea}
							/>
							{!isValid && (
								<p id={styles.descriptionRequiredMessage}>
									Description is required
								</p>
							)}
						</div>

						<h1>Duration</h1>

						<div className={styles.authorDurationSection}>
							<div>
								<div>
									<Input
										type='number'
										name='Duration'
										value={duration}
										onChange={handleDurationChange}
										labelText='Duration'
										placeholderText='Input text'
										isValid={isValid}
									/>
									<p>
										<b>{formatDuration(duration)}</b>
									</p>
								</div>

								<h1>Authors</h1>

								<Input
									type='text'
									name='authorName'
									value={author}
									onChange={handleAuthorChange}
									labelText='Author name'
									placeholderText='Input text'
								/>
								<Button
									buttonText='create author'
									category='text'
									type='button'
									onClick={handleCreateAuthor}
								/>

								<h1>Authors List</h1>
								<AuthorItem
									authors={authorsList}
									handleAddAuthor={handleAddAuthor}
									onDeleteButtonClick={handleDeleteAuthor}
								/>
							</div>
							<div className={styles.CourseAuthors}>
								<h1>Course Authors</h1>
								<AuthorItem
									authors={courseAuthorsList}
									handleAddAuthor={handleAddAuthor}
									onDeleteButtonClick={handleDeleteCourseAuthor}
								/>
							</div>
						</div>
					</form>
					<div className={styles.ButtonRow}>
						<Button
							buttonText='create course'
							onClick={submitCourse}
							type='button'
						/>
						<Link to='/courses/'>
							<Button type='submit' buttonText='cancel' />
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

CourseForm.propTypes = {
	isValid: propTypes.bool.isRequired,
	setIsValid: propTypes.func.isRequired,
};

export default CourseForm;
