import React, { PropsWithChildren, ReactChild } from "react"
import styled, { useTheme } from "styled-components"
import Box from "../../components/Box"
import { Typography } from "../../components/Typography"
import { down } from "../../styles/mixins"

type BaseTeamPageProps = PropsWithChildren<{
  title: ReactChild
}>
const StyledTittle = styled(Typography)`
  ${props => props.theme.typography.h2};
  text-align: center;
  text-transform: uppercase;
  line-height: 28px;
  padding: ${props => props.theme.spacing[8]} 0 ${props => props.theme.spacing[20]};
  ${down.xl`
    font-size: 28px;
  `}
`
const BaseTeamTab = ({ title, children }: BaseTeamPageProps) => {
  const theme = useTheme()
  return (
    <Box
      py={[theme.spacing[8], null, theme.spacing[12], theme.spacing[20], null]}
    >
      <StyledTittle>
        {title}
      </StyledTittle>
      <Box
        mt={[
          theme.spacing[10],
          null,
          theme.spacing[15],
          theme.spacing[23],
          null,
        ]}
      >
        {children}
      </Box>
    </Box>
  )
}

export default BaseTeamTab
