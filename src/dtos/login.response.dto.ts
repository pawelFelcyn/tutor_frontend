import { UserDetailsDto } from "./user.details.dto"

export type LoginResponseDto = {
    user: UserDetailsDto,
    token: string
}