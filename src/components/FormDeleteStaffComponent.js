import React from "react";
import { Button, Row, Col } from "reactstrap";
import { LocalForm } from "react-redux-form";

const FormDeleteStaff = (props) => {
	function handleDelete() {
		props.deleteStaff(props.staff.id);
		window.location.replace("/stafflist");
	}

	return (
		<div className="container">
			<LocalForm onSubmit={handleDelete}>
				<Row className="form-group">
					<Col md={{ size: 10 }}>
						<Button type="submit" color="primary">
							Xoá nhân viên
						</Button>
					</Col>
				</Row>
			</LocalForm>
		</div>
	);
};

export default FormDeleteStaff;