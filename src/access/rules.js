import { rule, inputRule } from 'graphql-shield';

export const isAuthenticated = rule()(async (parent, args, ctx) => {
  if (!ctx.user) {
    return Error('User not authorized.'); // TODO exception handling with status code
  }
  return true;
});

export const registrationValidation = inputRule()(
  (yup) =>
    yup.object({
      user: yup.object({
        email: yup.string().email().required(),
        password: yup.string().required(),
        confirmPassword: yup.string().oneOf([yup.ref('password')]),
      }),
    }),
  {
    abortEarly: true,
  },
);

export const loginValidation = inputRule()(
  (yup) =>
    yup.object({
      loginData: yup.object({
        email: yup.string().email().required(),
        password: yup.string().required(),
      }),
    }),
  {
    abortEarly: true,
  },
);

export const addAccountValidation = inputRule()(
  (yup) =>
    yup.object({
      account: yup.object({
        balance: yup.number().required(),
        currency: yup.string().required(),
        number: yup
          .string()
          .matches(/^[0-9]{16}$/)
          .required(),
        status: yup.number().integer().positive().min(0).max(1).required(),
        userId: yup.string().required(),
      }),
    }),
  {
    abortEarly: true,
  },
);

export const updateAccountValidation = inputRule()(
  (yup) =>
    yup.object({
      edits: yup.object({
        status: yup.number().integer().positive().min(0).max(1).required(),
      }),
    }),
  {
    abortEarly: true,
  },
);
