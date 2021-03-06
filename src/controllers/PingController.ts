import { Get, Route, Tags } from 'tsoa';

interface PingResponse {
  message: string;
}

@Tags("Support")
@Route("ping")
export class PingController {
  @Get("/")
  public async getMessage(): Promise<PingResponse> {
    return {
      message: "pong!",
    };
  }
}
