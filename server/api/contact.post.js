import nodemailer from 'nodemailer';
import validator from 'validator';
const config = useRuntimeConfig();

const transporter = nodemailer.createTransport({
	host: config.MAILHOST,
	port: config.MAILPORT,
	auth: {
		user: config.MAILUSER,
		pass: config.MAILPASSWORD,
	},
});

export default defineEventHandler(async (event) => {
	try {
		const body = await readBody(event);

		await isValid(body)
			.then(async (data) => {
				const mail = await transporter.sendMail({
					from: `${config.MAILUSER}`,
					replyTo: data.email,
					to: config.CONTACTMAIL,
					subject: `Site Web | ${data.name}`,
					text: data.message,
					html: `
					<body style="font-family: Arial;">
						<div class="mt-44" style="background-color: #111; border: solid 1px; padding: 20px; border-radius: 16px; color: #fff;">
							<h1 style="font-weight: bold; font-size: 24px;">Formulaire Erwan Decoster</h1>
							<p style="border-bottom: solid 1px; padding: 4px 0px;">
								<span style="font-weight: bold;">Nom : </span>
								${data.name}
							</p>
							<p style="border-bottom: solid 1px; padding: 4px 0px;">
								<span style="font-weight: bold;">Téléphone : </span>
								<a style="color: #F257D8; text-decoration: none;" href="tel:${data.phone}">
									${data.phone}
								</a>
							</p>
							<p style="border-bottom: solid 1px; padding: 4px 0px;">
								<span style="font-weight: bold;">E-mail : </span>
								<a style="color: #F257D8; text-decoration: none;" href="mailto:${data.email}">
									${data.email}
								</a>
							</p>
							<p style="padding-top: 4px;">
								<span style="font-weight: bold;">Message :</span>
							</p>
							<pre style="font-family: Arial; white-space: pre-wrap; padding-bottom: 4px;">${data.message}</pre>
						</div>
					</body>`,
				});
				return Promise.resolve();
			})
			.catch((errors) => {
				console.log(errors);
				return Promise.reject(errors);
			});
		return 'send';
	} catch (error) {
		// console.log(error);
		sendError(event, createError({ statusCode: 400, statusMessage: error }));
	}
});

async function isValid(body) {
	const errors = [];

	if (body.name.length === 0)
    errors.push({type: 'error', content: 'Le champ Nom est requi.'})
  if (body.phone.length === 0)
    errors.push({type: 'error', content: 'Le champ Téléphone est requi.'})
  if (body.email.length === 0)
    errors.push({type: 'error', content: 'Le champ E-mail est requi.'})
  if (body.message.length === 0)
    errors.push({type: 'error', content: 'Le champ Message est requi.'})
  else if (body.message.length <= 20)
    errors.push({type: 'error', content: 'Pour eviter le spam, le champ Message doit faire plus de 20 caractères.'})

	if (errors.length > 0) {
		return Promise.reject(errors);
	} else {
		return Promise.resolve({
			name: validator.escape(body.name),
			phone: validator.escape(body.phone),
			email: validator.normalizeEmail(body.email),
			message: validator.escape(body.message),
		});
	}
}