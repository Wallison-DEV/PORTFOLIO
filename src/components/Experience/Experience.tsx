import * as S from './styles'
import { Container, PrimaryTitle } from '@/global'
import { useT } from '@/i18n'

const Experience = () => {
	const { t } = useT()

	return (
		<Container data-aos="fade-up" style={{ textAlign: 'center' }}>
			<PrimaryTitle>{t.experience.title}</PrimaryTitle>
			<S.Timeline>
				{t.experience.jobs.map((job) => (
					<S.Job key={`${job.company}-${job.period}`}>
						<S.JobCard>
							<S.JobHeader>
								<S.Role>{job.role}</S.Role>
								<S.Period>
									{job.period} – {t.experience.present}
								</S.Period>
							</S.JobHeader>
							<S.Company>{job.company}</S.Company>
							{job.context && <S.Context>{job.context}</S.Context>}
							<S.Bullets>
								{job.bullets.map((bullet) => (
									<li key={bullet}>{bullet}</li>
								))}
							</S.Bullets>
						</S.JobCard>
					</S.Job>
				))}
			</S.Timeline>
		</Container>
	)
}

export default Experience
