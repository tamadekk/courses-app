import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link, useParams } from 'react-router-dom';

import { getAuthors } from '../../store/selector';

import propTypes from 'prop-types';

import styles from './CourseForm.module.css';

import Header from '../Header/Header';
import Input from '../../common/Input/Input';
import AuthorItem from './components/AuthorItem/AuthorItem';
import Button from '../../common/Button/Button';

import formatDuration from '../../helpers/formatDuration';
import getCurrentDate from '../../helpers/getCurrentDate';
import {
	performAddCourse,
	performUpdateCourse,
} from '../../store/courses/thunk';
import {
	performAddAuthor,
	performDeleteAuthor,
} from '../../store/authors/thunk';

const CourseForm = ({ isValid, setIsValid, editingCourse }) => {
	const authors = useSelector(getAuthors);
	const [courseAuthorsList, setCourseAuthorsList] = useState([]);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState(0);
	const [author, setAuthor] = useState({
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
		if (regex.test(value)) setTitle(value);
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
	const { courseId } = useParams();
	const courseData = useSelector((state) =>
		state.courses.find((course) => course.id === courseId)
	);

	useEffect(() => {
		if (editingCourse) {
			setTitle(courseData.title);
			setDescription(courseData.description);
			setDuration(courseData.duration);
			setCourseAuthorsList(
				courseData.authors.map((authorId) =>
					authors.find((author) => author.id === authorId)
				)
			);
		}
	}, [courseData, authors, editingCourse]);

	const handleCreateAuthor = () => {
		const userToken = localStorage.getItem('token');
		const newAuthor = {
			name: author.name,
		};
		if (newAuthor.name.length > 2) {
			dispatch(performAddAuthor(newAuthor, userToken));
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
		const userToken = localStorage.getItem('token');
		if (authorId) {
			dispatch(performDeleteAuthor(authorId, userToken));
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
			title,
			description,
			creationDate: getCurrentDate(),
			duration: parseInt(duration),
			authors: courseAuthorsList.map((author) => author.id),
		};
		const userToken = localStorage.getItem('token');
		if (editingCourse)
			dispatch(performUpdateCourse(newCourse, userToken, courseId));
		else dispatch(performAddCourse(newCourse, userToken));
		navigate('/courses/');
	};

	return (
		<>
			<Header />
			<div className={styles.container}>
				<h1>{editingCourse ? 'Edit Course' : 'Create Course'}</h1>
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
							buttonText={editingCourse ? 'Update Course' : 'Create Course'}
							onClick={submitCourse}
							type='button'
						/>
						<Link to='/courses/'>
							<Button type='submit' buttonText='Cancel' />
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
	editingCourse: propTypes.bool,
};

export default CourseForm;
