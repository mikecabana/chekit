import { GetServerSideProps } from 'next';
import { getProviders, signIn } from 'next-auth/client';
import { FunctionComponent } from 'react';

import { LockClosedIcon } from '@heroicons/react/outline';

import Google from '../../../public/google.svg';

const GoogleBadge = () => (
    <div className="w-8 h-8 mr-4 flex flex-row justify-center items-center">
        <Google viewBox="0 0 48 48" />
    </div>
);

const SignIn: FunctionComponent<{ providers: any }> = ({ providers }) => {
    return (
        <div className="bg-grap-200 dark:bg-gray-900 flex flex-row justify-center items-start pt-10 absolute top-0 bottom-0 right-0 left-0">
            <div className="bg-white dark:bg-gray-700 rounded p-8 text-center">
                <div className="w-16 h-16 mb-4 rounded-full mx-auto bg-indigo-300 dark:bg-gray-600 flex flex-row justify-center items-center">
                    <LockClosedIcon height="24" width="24" />
                </div>
                {Object.values(providers).map((provider: any) => (
                    <div key={provider.name} className="mt-4">
                        <button
                            className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                            onClick={() => signIn(provider.id)}
                        >
                            <GoogleBadge /> Sign in with {provider.name}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SignIn;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const providers = await getProviders();
    return {
        props: { providers },
    };
};
