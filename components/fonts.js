import { Global } from "@emotion/react";

const Fonts = () => {
	return (
		<Global
			styles={`
				@import url("http://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c:wght@300;700&display=swap");
			`}
		/>
	);
}

export default Fonts;