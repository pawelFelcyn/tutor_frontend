export class RegisterDto{
    firstName: string | null = null;
    lastName: string | null = null;
    role: string | null = 'User';
    email: string | null = null;
    password: string | null = null;
    confirmPassword: string | null = null;
    tutorDescription: string | null = null;
}