import styled from "styled-components";

const Flex = styled.div`
	display: flex;
	flex-direction: ${({ direction }) => direction === "column" ? "column" : "row"};
	padding: ${({ padding}) => padding ?? ""};
	justify-content: ${({ justify}) => justify ?? ""};
	flex-wrap: ${({ wrap}) => wrap ?? "wrap"};
`;
export default Flex;