import React, { useRef } from 'react';
import InputErrorMessage from '@/components/input-error-message';
import { Label } from '@/components/label';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { useForm } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import SectionTitle from '@/components/section-title';
import { Card, CardContent } from '@/components/card';

export default function UpdatePasswordForm({ className }: { className?: string }) {
    const passwordInput = useRef<HTMLInputElement>(null);
    const currentPasswordInput = useRef<HTMLInputElement>(null);
    const { data, setData, put, errors, reset, processing, recentlySuccessful } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: () => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current?.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current?.focus();
                }
            },
        });
    };

    return (
        <Card>
            <SectionTitle
                title='Update Password'
                description='Ensure your account is using a long, random password to stay secure.'
            />

            <CardContent>
                <form onSubmit={submit} className='space-y-6'>
                    <div>
                        <Label htmlFor='current_password'>Current Password</Label>

                        <Input
                            id='current_password'
                            ref={currentPasswordInput}
                            value={data.current_password}
                            onChange={(e) => setData('current_password', e.target.value)}
                            type='password'
                            autoComplete='current-password'
                            required
                        />

                        <InputErrorMessage message={errors.current_password} className='mt-2' />
                    </div>

                    <div>
                        <Label htmlFor='password'>New Password</Label>

                        <Input
                            id='password'
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            type='password'
                            autoComplete='new-password'
                            required
                        />

                        <InputErrorMessage message={errors.password} className='mt-2' />
                    </div>

                    <div>
                        <Label htmlFor='password_confirmation'>Confirm Password</Label>

                        <Input
                            id='password_confirmation'
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            type='password'
                            autoComplete='new-password'
                            required
                        />

                        <InputErrorMessage message={errors.password_confirmation} className='mt-2' />
                    </div>

                    <div className='flex items-center gap-4'>
                        <Button disabled={processing}>Save</Button>

                        <Transition
                            show={recentlySuccessful}
                            enterFrom='opacity-0'
                            leaveTo='opacity-0'
                            className='transition ease-in-out'>
                            <p className='text-sm text-muted-foreground'>Saved.</p>
                        </Transition>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
