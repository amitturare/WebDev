import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "../../common/hooks";
import { ROLES, ROUTER } from "../../common/constants";

import UserCard from "../../components/UserCard/UserCard";
import EntityCards from "../EntityCards/EntityCards";

import { initialUserState, withUserDispatch } from "./User.reducer";

const User = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { users, currentPage, totalPages, searchString } = useSelector((state) => state.user);

	useEffect(() => {
		const page = initialUserState.currentPage;
		const searchString = initialUserState.searchString;

		withUserDispatch(dispatch).getUsers(page, searchString);
	}, [dispatch]);

	const handlePageChange = useCallback(
		(page: number) => {
			withUserDispatch(dispatch).getUsers(page, searchString);
			navigate(`/users?page=${page}`);
		},
		[dispatch, navigate, searchString]
	);

	const handleSearch = useCallback(
		(searchString: string) => {
			withUserDispatch(dispatch).getUsers(1, searchString);
			navigate("/users?page=1");
		},
		[dispatch]
	);

	return (
		<EntityCards
			onSearch={handleSearch}
			currentPage={currentPage}
			totalPages={totalPages}
			onPageChange={handlePageChange}
			baseUrl={ROUTER.GET_USERS_PATH}
		>
			{users.map(({ _id, name, username, role }) => (
				<UserCard key={_id} name={name} username={username} role={role as ROLES} />
			))}
		</EntityCards>
	);
};

export default User;
