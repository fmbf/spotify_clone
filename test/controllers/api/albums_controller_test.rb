require 'test_helper'

class Api::AlbumsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_albums_index_url
    assert_response :success
  end

  test "should get show" do
    get api_albums_show_url
    assert_response :success
  end

end
