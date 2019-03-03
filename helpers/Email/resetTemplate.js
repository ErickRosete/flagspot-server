
exports.resetHtmlContent=(emailContent)=>{
    const htmlContent = `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <style type="text/css">
        .button_link{
            background:red
        }
        </style>
    </head>
    <body>
        <p style="margin-bottom:2rem;">Saludos</p>
        <p>Usted quiso reestablecer la contrasena</p>
        <p>Su correo electrónico es: ${emailContent.email}</p>
        <a href="http://localhost:3000/reset/${emailContent.id}" style="width:250; display:block; text-decoration:none; border:0; text-align:center; font-weight:bold;font-size:18px; font-family: Arial, sans-serif; color: #ffffff" class="button_link">Reset password
            <img src="https://gallery.mailchimp.com/fdcaf86ecc5056741eb5cbc18/images/73ac4376-78ab-4d32-a0b5-b8195202e51f.jpg" width="32" height="17" style="padding-top:5px" alt="" border="0"/>
        </a>
        <p style="margin-top:3rem;">Atte: Sitio ${emailContent.siteName}</p>
    </body>
    </html>    
`
    return htmlContent
}