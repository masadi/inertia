import React, { useEffect } from 'react';
import GuestLayout from '@/layouts/guest-layout';
import InputErrorMessage from '@/components/input-error-message';
import { Label } from '@/components/label';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { Checkbox } from '@/components/checkbox';

export default function Register() {
    const { hasTermsAndPrivacyPolicyFeature } = usePage<{ hasTermsAndPrivacyPolicyFeature: boolean }>().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        terms: false,
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onChange = (event: { target: { name: any; value: any } }) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        post('/register');
    };

    return (
        <>
            <Head title='Register' />

            <form onSubmit={submit}>
                <>
                    <div>
                        <Label htmlFor='name'>Name</Label>

                        <Input
                            type='text'
                            name='name'
                            value={data.name}
                            autoComplete='name'
                            autoFocus
                            onChange={onChange}
                            required
                        />

                        <InputErrorMessage message={errors.name} className='mt-2' />
                    </div>

                    <div className='mt-4'>
                        <Label htmlFor='email'>Email</Label>

                        <Input
                            type='email'
                            name='email'
                            value={data.email}
                            autoComplete='username'
                            onChange={onChange}
                            required
                        />

                        <InputErrorMessage message={errors.email} className='mt-2' />
                    </div>

                    <div className='mt-4'>
                        <Label htmlFor='password'>Password</Label>

                        <Input
                            type='password'
                            name='password'
                            value={data.password}
                            autoComplete='new-password'
                            onChange={onChange}
                            required
                        />

                        <InputErrorMessage message={errors.password} className='mt-2' />
                    </div>

                    <div className='mt-4'>
                        <Label htmlFor='password_confirmation'>Confirm Password</Label>

                        <Input
                            type='password'
                            name='password_confirmation'
                            value={data.password_confirmation}
                            onChange={onChange}
                            required
                        />

                        <InputErrorMessage message={errors.password_confirmation} className='mt-2' />
                    </div>

                    {hasTermsAndPrivacyPolicyFeature && (
                        <div className='mt-4'>
                            <Label htmlFor='terms'>
                                <div className='flex items-center'>
                                    <Checkbox
                                        name='terms'
                                        id='terms'
                                        onCheckedChange={(e: any) => setData('terms', e)}
                                        required
                                    />

                                    <div className='ml-2'>
                                        I agree to the{' '}
                                        <a
                                            target='_blank'
                                            href={route('terms.show')}
                                            className='text-sm text-muted-foreground underline hover:text-foreground'>
                                            Terms of Service
                                        </a>{' '}
                                        and{' '}
                                        <a
                                            target='_blank'
                                            href={route('privacy.show')}
                                            className='text-sm text-muted-foreground underline hover:text-foreground'>
                                            Privacy Policy
                                        </a>
                                    </div>
                                </div>
                                <InputErrorMessage className='mt-2' message={errors.terms} />
                            </Label>
                        </div>
                    )}

                    <div className='mt-4 flex items-center justify-end'>
                        <Link href='/login' className='text-sm text-muted-foreground underline hover:text-foreground'>
                            Already registered?
                        </Link>

                        <Button type='submit' className='ml-4' disabled={processing}>
                            Register
                        </Button>
                    </div>
                </>
            </form>
        </>
    );
}

Register.layout = (page: React.ReactNode) => {
    return (
        <GuestLayout
            header='Register'
            description={
                <>
                    Or{' '}
                    <Link href={route('login')} className='font-medium text-brand-600 hover:text-brand-500'>
                        login
                    </Link>{' '}
                    if you already have an account
                </>
            }
            children={page}
        />
    );
};
