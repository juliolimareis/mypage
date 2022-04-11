import React from "react";
import { StarIcon } from "@chakra-ui/icons";
import { Box, useColorModeValue } from "@chakra-ui/react";
import useLocale from "../../hooks/useLocale";

const Experience = ({ name, level, years, color, noExp, children }) => {
	const { t } = useLocale()

	return (
		<Box>
			<Box as='span' fontSize={20}>
				<Box as='b' color={color}>{name}</Box>

				{
					!noExp && (
						<Box as='span' fontSize={20}>
							&nbsp;-&nbsp;
							{t.experience} &nbsp;
						</Box>
					)
				}

				<Box as="span">
					{
						[...Array(level)].map((star) => (
							<Box as='span'>
								&nbsp;
								<StarIcon
									mb={2}
									key={star}
									fontSize={16}
									color={useColorModeValue('teal', 'yellow')}
								/>
							</Box>
						))
					}
				</Box>

				&nbsp;&nbsp;

				<Box as='span'
					p={2}
					fontSize={15}
					bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
				>
					{years}
				</Box>
			</Box>

			<Box as='p'>
				{children}
			</Box>

		</Box>
	)
}
export default Experience