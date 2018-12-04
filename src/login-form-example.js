// TODO: Make this code look prettier using hooks :)

import React from 'react';
import { createStructuredSelector } from 'reselect';

import translatedConnect from '../common/helpers/translatedConnect';
import { login } from '../common/auth/actions';
import { Container, Form, Label, FieldContainer, Field, Submit, ErrorContainer, ErrorMessage } from './components';
import { errorSelector, isFetchingSelector, passwordSelector, usernameSelector } from './selectors';
import { editField } from './actions';
import { officeIdSelector, tokenSelector } from '../common/auth/selectors';
import { redirectToDefaultOfficeDashboard } from '../common/auth/helpers';

type Props = {
    error: ?string,
    editField: (string, string) => void,
    isFetching: boolean,
    login: (string, string) => void,
    officeId: ?number,
    password: string,
    username: string,
    token: ?string,
    translate: string => string,
};

export class LoginRoute extends React.Component<Props> {
    componentDidMount() {
        if (this.props.token) redirectToDefaultOfficeDashboard(this.props.officeId);
    }

    componentDidUpdate() {
        if (this.props.token) redirectToDefaultOfficeDashboard(this.props.officeId);
    }

    render() {
        const { editField, error, isFetching, login, password, translate, username } = this.props;

        return (
            <Container>
                <Form onSubmit={(e) => {
                    e.preventDefault();
                    login(username, password);
                }}>
                    <FieldContainer>
                        <Label>{translate('login.username')}</Label>
                        <Field
                            type='text'
                            value={username}
                            onChange={(e) => editField('username', e.target.value)}
                            required
                            data-e2e-key="username"
                        />
                    </FieldContainer>
                    <FieldContainer>
                        <Label>{translate('login.password')}</Label>
                        <Field
                            type='password'
                            value={password}
                            onChange={(e) => editField('password', e.target.value)}
                            required
                            data-e2e-key="password"
                        />
                    </FieldContainer>
                    <Submit
                        type='submit'
                        disabled={isFetching}
                        data-e2e-key="login-button"
                    >
                        {translate('login.submit')}
                    </Submit>
                </Form>
                {
                    error && <ErrorContainer>
                        <ErrorMessage data-e2e-key="login-error">
                            {translate('login.errorMessage')}
                        </ErrorMessage>
                    </ErrorContainer>
                }
            </Container>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    error: errorSelector(),
    isLoading: isFetchingSelector(),
    officeId: officeIdSelector(),
    password: passwordSelector(),
    token: tokenSelector(),
    username: usernameSelector(),
});

const mapDispatchToProps = {
    editField,
    login,
};

export default translatedConnect(mapStateToProps, mapDispatchToProps)(LoginRoute);

