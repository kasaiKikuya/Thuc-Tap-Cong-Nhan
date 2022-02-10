
const vi = {
    common: {
      or: 'hoặc',
      cancel: 'Hủy bỏ',
      reset: 'Đặt lại',
      save: 'Lưu',
      search: 'Tìm kiếm',
      edit: 'Chỉnh sửa',
      remove: 'Loại bỏ',
      new: 'Mới',
      new4user:'Đăng kí',
      export: 'Xuất ra Excel',
      noDataToExport: 'Không có dữ liệu để xuất',
      import: 'Nhập',
      discard: 'Hủy',
      yes: 'Có',
      no: 'Không',
      pause: 'Tạm dừng',
      areYouSure: 'Bạn có chắc chắn không?',
      view: 'Xem',
      destroy: 'Xóa',
      mustSelectARow: 'Cần phải chọn một hàng',
      confirm: 'Chấp nhận',
    },
  
    app: {
      title: 'DUT Library',
    },
  
    entities: {
      loan: {
        name: 'sách mượn',
        label: 'Sách mượn',
        menu: 'Sách mượn',
        exporterFileName: 'xuat_sach_muon',
        list: {
          menu: 'Sách mượn',
          title: 'Sách mượn',
        },
        emailAll: {
            label: 'Gửi lời nhắc qua Email',
            success: 'Đã gửi email',
        },
        create: {
          success: 'Lưu sách mượn thành công',
        },
        update: {
          success: 'Cập nhật sách mượn thành công',
        },
        destroy: {
          success: 'Xóa sách mượn thành công',
        },
        destroyAll: {
          success: 'Xóa sách mượn thành công',
        },
        edit: {
          title: 'Chỉnh sửa sách mượn',
        },
        fields: {
          id: 'Id',
          book: 'Sách',
          member: 'Thành viên',
          issueDateRange: 'Ngày mượn',
          issueDate: 'Ngày mượn',
          dueDateRange: 'Ngày hết hạn',
          dueDate: 'Ngày hết hạn',
          returnDateRange: 'Ngày trả',
          returnDate: 'Ngày trả',
          status: 'Trạng thái',
          createdAt: 'Tạo vào',
          updatedAt: 'Cập nhật vào',
          createdAtRange: 'Tạo vào',
        },
        enumerators: {
          status: {
            inProgress: 'Đang cho mượn',
            overdue: 'Quá hạn',
            closed: 'Đã trả',
          },
        },
        new: {
          title: 'Thêm sách mượn',
        },
        view: {
          title: 'Xem sách mượn',
        },
        importer: {
          title: 'Nhập sách mượn',
          fileName: 'loan_import_template',
          hint:
            'Tập tin/Hình ảnh phải là đương dẫn của các tập tin được ngăn cách bởi khoảng trống.',
        },
      },
  
      book: {
        name: 'sách',
        label: 'Sách',
        menu: 'Sách',
        exporterFileName: 'xuat_sach',
        list: {
          menu: 'Sách',
          title: 'Sách',
        },
        create: {
          success: 'Tạo sách mới thành công!',
        },
        update: {
          success: 'Cập nhật sách thành công!',
        },
        destroy: {
          success: 'Xóa sách thành công',
        },
        destroyAll: {
          success: 'Xóa sách thành công',
        },
        edit: {
          title: 'Chỉnh sửa sách',
        },
        fields: {
          id: 'Id',
          isbn: 'ISBN',
          title: 'Tên sách',
          author: 'Tác giả',
          numberOfCopiesRange: 'Số bản sao',
          numberOfCopies: 'Số bản sao',
          stockRange: 'Hiện có',
          stock: 'Hiện có',
          images: 'Hình ảnh',
          status: 'Trạng thái',
          createdAt: 'Tạo vào',
          updatedAt: 'Cập nhật vào',
          createdAtRange: 'Tạo vào',
        },
        enumerators: {
          status: {
            available: 'Có sẵn',
            unavailable: 'Không có sẵn',
          },
        },
        new: {
          title: 'Thêm sách',
        },
        view: {
          title: 'Xem thông tin sách',
        },
        importer: {
          title: 'Nhập sách',
          fileName: 'book_import_template',
          hint:
            'Tập tin/Hình ảnh phải là đương dẫn của các tập tin được ngăn cách bởi khoảng trống.',
        },
      },
    },
  
    auth: {
      profile: {
        title: 'Chỉnh sửa thông tin cá nhân',
        success: 'Cập nhật thông tin cá nhân thành công',
      },
      createAnAccount: 'Tạo tài khoản',
      rememberMe: 'Lưu thông tin đăng nhập',
      forgotPassword: 'Quên mật khẩu',
      signin: 'Đăng nhập',
      signup: 'Đăng ký',
      signout: 'Đăng xuất',
      alreadyHaveAnAccount:
        'Bạn đã có tài khoản? Đăng nhập',
      signinWithAnotherAccount:
        'Đăng nhập với tài khoản khác',
      emailUnverified: {
        message: `Xác nhân email của bạn tại <strong>{0}</strong> để tiếp tục.`,
        submit: `Gửi lại email xác nhận`,
      },
      emptyPermissions: {
        message: `Bạn không được phép thực hiện việc này. Liên hệ admin để được cấp quyền`,
      },
      passwordResetEmail: {
        message: 'Gửi mật khẩu đặt lại tới email',
        error: `Email không tồn tại`,
      },
      passwordReset: {
        message: 'Đặt lại mật khẩu',
      },
      emailAddressVerificationEmail: {
        error: `Email không tồn tại`,
      },
      verificationEmailSuccess: `Xác nhận email thành công`,
      passwordResetEmailSuccess: `Mật khẩu đặt lại được gửi tới email thành công`,
      passwordResetSuccess: `Thay đổi mật khẩu thành công`,
      verifyEmail: {
        success: 'Xác nhận email thành công',
        message:
          'Đợi một lúc, email của bạn đang được xác minh...',
      },
    },
  
    roles: {
        librarian: {
        label: 'Thủ thư ',
        description: 'Quản lí thư viện',
      },
      member: {
        label: 'Thành viên',
        description: 'Quyền truy cập của thành viên',
      },
      admin: {
        label: 'Admin',
        description: 'Chủ quản thư viện',
      },
    },
  
    iam: {
      title: 'Quản lý người dùng',
      menu: 'Người dùng',
      disable: 'Vô hiệu hóa',
      disabled: 'Đã vô hiệu hóa',
      enabled: 'Đã được kích hoạt',
      enable: 'Kích hoạt',
      doEnableSuccess: 'Kích hoạt người dùng thành công',
      doDisableSuccess: 'Vô hiệu hóa người dùng thành công',
      doDisableAllSuccess: 'Vô hiệu hóa người dùng thành công',
      doEnableAllSuccess: 'Kích hoạt người dùng thành công',
      doAddSuccess: 'Lưu người dùng thành công',
      doUpdateSuccess: 'Lưu người dùng thành công',
      viewBy: 'Được xem bởi',
      users: {
        name: 'người dùng',
        label: 'Người dùng',
        exporterFileName: 'xuat_nguoi_dung',
        doRemoveAllSelectedSuccess:
          'Loại bỏ quyền thành công',
      },
      roles: {
        label: 'Vai trò',
        doRemoveAllSelectedSuccess:
          'Loại bỏ quyền thành công',
      },
      edit: {
        title: 'Chỉnh sửa người dùng',
      },
      new: {
        title: 'Thêm người dùng',
        emailsHint:
          'Tách nhiều địa chỉ email bằng ký tự dấu phẩy.',
      },
      view: {
        title: 'Xem người dùng',
        activity: 'Hoạt động',
      },
      importer: {
        title: 'Nhập người dùng',
        fileName: 'mau_nhap_nguoi_dung',
        hint:
          'Tập tin/Hình ảnh phải là đương dẫn của các tập tin được ngăn cách bởi khoảng trống. Các mối quan hệ phải là ID của hồ sơ tham chiếu được ngăn cách bởi khoảng trống. Vai trò phải là id của vai trò ngăn cách bởi khoảng trống.',
      },
      errors: {
        userAlreadyExists:
          'Email đã được sử dụng',
        userNotFound: 'Không tìm thấy người dùng',
        disablingHimself: `Bạn không thể vô hiệu hóa chính mình`,
        revokingOwnPermission: `Bạn không thể thu hồi quyền của chính mình`,
      },
    },
  
    user: {
      fields: {
        id: 'Id',
        authenticationUid: 'Uid xác thực',
        avatars: 'Ảnh',
        email: 'Email',
        emails: 'Email(s)',
        fullName: 'Tên',
        firstName: 'Tên',
        lastName: 'Họ',
        status: 'Trạng thái',
        disabled: 'Đã vô hiệu hóa',
        phoneNumber: 'Số điện thoại',
        role: 'Vai trò',
        createdAt: 'Tạo vào',
        updatedAt: 'Cập nhật vào',
        roleUser: 'Vai trò người dùng',
        roles: 'Vai trò',
        createdAtRange: 'Tạo vào',
        password: 'Mật khẩu',
        rememberMe: 'Nhớ thông tin truy cập',
      },
      enabled: 'Đã kích hoạt',
      disabled: 'Đã vô hiệu hóa',
      validations: {
        // eslint-disable-next-line
        email: 'Email ${value} hợp lệ',
      },
    },
  
    auditLog: {
      menu: 'Xem lịch sử truy cập',
      title: 'Xem lịch sử truy cập',
      exporterFileName: 'xuat_lich_su_truy_cap',
      entityNamesHint:
        'Ngăn cách bằng dấu phẩy.',
      fields: {
        id: 'Id',
        timestampRange: 'Giai đoạn',
        entityName: 'Thực thể',
        entityNames: 'Thực thể',
        entityId: 'ID thực thể',
        action: 'Hành động',
        values: 'Giá trị',
        timestamp: 'Thời gian',
        createdByEmail: 'Email',
      },
    },
    settings: {
      title: 'Cài đặt',
      menu: 'Cài đặt',
      save: {
        success:
          'Lưu cài đặt thành công. Tải lại trang trong {0} giây dựa trên các thay đổi vừa lưu.',
      },
      fields: {
        theme: 'Chủ đề',
        loanPeriodInDays: 'Thời gian cho mượn ',
      },
      colors: {
        default: 'Mặc định',
        cyan: 'Lục lam',
        'geek-blue': 'Xanh cũ',
        gold: 'Vàng',
        lime: 'Xanh chanh',
        magenta: 'Đỏ tươi',
        orange: 'Cam',
        'polar-green': 'Xanh đậm',
        purple: 'Tím',
        red: 'Đỏ',
        volcano: 'Đỏ đậm',
        yellow: 'Vàng',
      },
    },
    home: {
      menu: 'Trang chủ',
      message: `This page uses fake data for demonstration purposes only. You can edit it at frontend/src/modules/home/components/home-page.vue.`,
      charts: {
        day: 'Ngày',
        red: 'Đỏ',
        green: 'Xanh lá',
        yellow: 'Vàng',
        grey: 'Xám',
        blue: 'Xanh',
        orange: 'Cam',
        months: {
          1: 'Tháng 1',
          2: 'Tháng 2',
          3: 'Tháng 3',
          4: 'Tháng 4',
          5: 'Tháng 5',
          6: 'Tháng 6',
          7: 'Tháng 7',
        },
        eating: 'Đang ăn',
        drinking: 'Đang uống',
        sleeping: 'Đang ngủ',
        designing: 'Đang thiết kế',
        coding: 'Đang lập trình',
        cycling: 'Đang đạp xe',
        running: 'Đang chạy',
        customer: 'Khách hàng',
      },
    },
    errors: {
      backToHome: 'Về trang chủ',
      403: `Xin lỗi, bạn không có quyền truy cập vào trang này`,
      404: 'Xin lỗi, trang bạn muốn truy cập không tồn tại',
      500: 'Xin lỗi, server đang bị trục trặc',
      forbidden: {
        message: 'Cấm',
      },
      validation: {
        message: 'Xảy ra lỗi',
      },
      defaultErrorMessage: 'Ops, xảy ra lỗi',
    },
    // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
    /* eslint-disable */
    validation: {
      mixed: {
        default: '${path} không hợp lệ',
        required: '${path} bắt buộc',
        oneOf:
          '${path} phải là một trong các giá trị: ${values}',
        notOneOf:
          '${path} không được là các giá trị sau: ${values}',
        notType: ({ path, type, value, originalValue }) => {
          return `${path} phải là ${type}`;
        },
      },
      string: {
        length:
          '${path} phải có chính xác ${length} kí tự',
        min: '${path} phải có ít nhất ${min} kí tư',
        max: '${path} phải có nhiều nhất ${max} kí tự',
        matches:
          '${path} phải phù hợp với: "${regex}"',
        email: '${path} phải là email hợp lệ',
        url: '${path} phải là đường dẫn hợp lệ',
        trim: '${path} phải là một chuỗi được cắt xén',
        lowercase: '${path} phải được viết thường',
        uppercase: '${path} phải được viết hoa',
        selected: '${path} phải được chọn',
      },
      number: {
        min:
          '${path} phải lớn hơn hoặc bằng ${min}',
        max: '${path} phải nhỏ hơn hoặc bằng ${max}',
        lessThan: '${path} phải nhỏ hơn ${less}',
        moreThan: '${path} phải lớn hơn ${more}',
        notEqual: '${path} không được bằng ${notEqual}',
        positive: '${path} phải là số dương',
        negative: '${path} phải là số âm',
        integer: '${path} phải là số nguyên',
        invalid: '${path} phải là số',
      },
      date: {
        min: '${path} phải trễ hơn ${min}',
        max: '${path} phải sớm hơn ${max}',
      },
      boolean: {},
      object: {
        noUnknown:
          '${path} trường không được có các từ khóa không phù hợp với đối tượng',
      },
      array: {
        min: '${path} trường phải có ít nhất ${min} items',
        max:
          '${path} trường phải có ít hơn hoặc bằng ${max} items',
      },
    },
    /* eslint-disable */
    fileUploader: {
      upload: 'Tải lên',
      image: 'Bạn phải tải lên một hình ảnh',
      size: 'Tập tin quá lớn. Kích thước tối đa cho phép là {0}',
      formats: `Cấu trúc không hợp lệ. Phải là '{0}'.`,
    },
    importer: {
      line: 'Đường',
      status: 'Trạng thái',
      pending: 'Chưa xong',
      imported: 'Đã nhập',
      error: 'lỗi',
      total: `{0} đã nhập, {1} chưa xong và {2} lỗi`,
      importedMessage: `Đã xử lý {0} trong số {1}.`,
      noNavigateAwayMessage:
        'Đừng điều hướng khỏi trang này, nếu không quá trình nhập sẽ bị dừng.',
      completed: {
        success:
          'Đã nhập xong. Tất cả các hàng đã được nhập thành công.',
        someErrors:
          'Quá trình xử lý đã hoàn tất nhưng không thể nhập một số hàng.',
        allErrors: 'Nhập không thành công. Không có hàng hợp lệ.',
      },
      form: {
        downloadTemplate: 'Tải xuống mẫu',
        hint:
          'Nhấp hoặc kéo tệp đến đây để tiếp tục',
      },
      list: {
        discardConfirm:
          'Bạn có chắc không? Dữ liệu chưa được nhập sẽ bị mất.',
      },
      errors: {
        invalidFileEmpty: 'Tệp trống',
        invalidFileExcel:
          'Chỉ tệp excel (.xlsx) được cho phép',
        invalidFileUpload:
          'Tập tin không hợp lệ. Đảm bảo rằng bạn đang sử dụng mẫu mới nhất.',
        importHashRequired: 'Nhập hash là bắt buộc',
        importHashExistent: 'Dữ liệu đã được nhập',
      },
    },
  
    autocomplete: {
      loading: 'Đang tải...',
    },
  
    imagesViewer: {
      noImage: 'Không có hình ảnh',
    },
  };
  
  export default vi;
 