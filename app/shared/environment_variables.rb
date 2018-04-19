# frozen_string_literal: true

module FastlaneCI
  # Class wrapping fastlane CI environment variables that people using fastlane.ci should care about
  # NOTE: This doesn't include the fastlane.ci-developer-sepcific environment variables primarily used
  # during development of fastlane.ci by the fastlane
  class EnvironmentVariables
    # @return [Hash]
    def all
      {
        encryption_key: encryption_key,
        ci_user_email: ci_user_email,
        ci_user_password: ci_user_password,
        repo_url: repo_url,
        clone_user_email: initial_clone_email,
        clone_user_api_token: clone_user_api_token
      }
    end

    # used to construct build output links in PR statuses back to fastlane.ci build page
    def ci_base_url
      return ENV["FASTLANE_CI_BASE_URL"]
    end

    # Randomly generated key, that's used to encrypt the user passwords
    def encryption_key
      return ENV["FASTLANE_CI_ENCRYPTION_KEY"]
    end

    # The email address for your fastlane CI bot account
    def ci_user_email
      return ENV["FASTLANE_CI_USER"]
    end

    # The password for your fastlane CI bot account
    def ci_user_password
      return ENV["FASTLANE_CI_PASSWORD"]
    end

    # The git URL (https) for the configuration repo
    def repo_url
      return ENV["FASTLANE_CI_REPO_URL"]
    end

    # Needed just for the first startup of fastlane.ci:
    # The email address used for the intial clone for the config repo
    def initial_clone_email
      return ENV["FASTLANE_CI_INITIAL_CLONE_EMAIL"]
    end

    # The API token used for the initial clone for the config repo
    def clone_user_api_token
      return ENV["FASTLANE_CI_INITIAL_CLONE_API_TOKEN"]
    end
  end
end
