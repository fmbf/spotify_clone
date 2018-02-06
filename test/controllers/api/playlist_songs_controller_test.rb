require 'test_helper'

class Api::PlaylistSongsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_playlist_songs_index_url
    assert_response :success
  end

  test "should get create" do
    get api_playlist_songs_create_url
    assert_response :success
  end

  test "should get show" do
    get api_playlist_songs_show_url
    assert_response :success
  end

  test "should get update" do
    get api_playlist_songs_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_playlist_songs_destroy_url
    assert_response :success
  end

end
