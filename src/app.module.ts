import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EpisodesModule } from './episodes/episodes.module';
import { TopicsModule } from './topics/topics.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [EpisodesModule, TopicsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
