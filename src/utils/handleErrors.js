import { getParsedBody } from './getParsedBody';

/**
 * Helper for throwing Error if response to fetch is not ok
 * @param  {Object} response
 * @throws {Error}
 * @return {Object}
 */
export const handleErrors = response => {
  if (!response.ok) {
    const { status, statusText, url } = response;
    const error = new Error(status);

    getParsedBody(response).then(parsedBody => {
      const body = JSON.stringify(parsedBody, null, ' ');

      // eslint-disable-next-line no-console
      console.log(`

       ██████╗ ██╗  ██╗    ███╗   ██╗ ██████╗ 
      ██╔═══██╗██║  ██║    ████╗  ██║██╔═══██╗
      ██║   ██║███████║    ██╔██╗ ██║██║   ██║
      ██║   ██║██╔══██║    ██║╚██╗██║██║   ██║
      ╚██████╔╝██║  ██║    ██║ ╚████║╚██████╔╝
       ╚═════╝ ╚═╝  ╚═╝    ╚═╝  ╚═══╝ ╚═════╝ 
                        
        This sucks... 
       
        Request to ${url} failed.
        Status code: ${status}
        Status text: ${statusText}
        Body: ${body}
      `);
    });

    throw error;
  }

  return response;
};
