// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

const domain2 = 'gold-usergeneratedcontent.net';

function create_download_url(id) {
  return "https://ltn.gold-usergeneratedcontent.net/galleries/" + id + ".js";
}

function gg_s(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); }

var gg = {};
var window = {};
var document = {};
var name = {};
var location = {};
var customElements = {};
var history = {};
var locationbar = {};
var menubar = {};
var personalbar = {};
var scrollbars = {};
var statusbar = {};
var toolbar = {};
var status = {};
var closed = {};
var frames = {};
var length = {};
var top = {};
var opener = {};
var parent = {};
var frameElement = {};
var navigator = {};
var origin = {};
var external = {};
var screen = {};
var innerWidth = {};
var innerHeight = {};
var scrollX = {};
var pageXOffset = {};
var scrollY = {};
var pageYOffset = {};
var visualViewport = {};
var screenX = {};
var screenY = {};
var outerWidth = {};
var outerHeight = {};
var devicePixelRatio = {};
var clientInformation = {};
var screenLeft = {};
var screenTop = {};
var defaultStatus = {};
var defaultstatus = {};
var styleMedia = {};
var onsearch = {};
var isSecureContext = {};
var performance = {};
var onappinstalled = {};
var onbeforeinstallprompt = {};
var crypto = {};
var indexedDB = {};
var webkitStorageInfo = {};
var sessionStorage = {};
var localStorage = {};
var onbeforexrselect = {};
var onabort = {};
var onblur = {};
var oncancel = {};
var oncanplay = {};
var oncanplaythrough = {};
var onchange = {};
var onclick = {};
var onclose = {};
var oncontextmenu = {};
var oncuechange = {};
var ondblclick = {};
var ondrag = {};
var ondragend = {};
var ondragenter = {};
var ondragleave = {};
var ondragover = {};
var ondragstart = {};
var ondrop = {};
var ondurationchange = {};
var onemptied = {};
var onended = {};
var onerror = {};
var onfocus = {};
var onformdata = {};
var oninput = {};
var oninvalid = {};
var onkeydown = {};
var onkeypress = {};
var onkeyup = {};
var onload = {};
var onloadeddata = {};
var onloadedmetadata = {};
var onloadstart = {};
var onmousedown = {};
var onmouseenter = {};
var onmouseleave = {};
var onmousemove = {};
var onmouseout = {};
var onmouseover = {};
var onmouseup = {};
var onmousewheel = {};
var onpause = {};
var onplay = {};
var onplaying = {};
var onprogress = {};
var onratechange = {};
var onreset = {};
var onresize = {};
var onscroll = {};
var onseeked = {};
var onseeking = {};
var onselect = {};
var onstalled = {};
var onsubmit = {};
var onsuspend = {};
var ontimeupdate = {};
var ontoggle = {};
var onvolumechange = {};
var onwaiting = {};
var onwebkitanimationend = {};
var onwebkitanimationiteration = {};
var onwebkitanimationstart = {};
var onwebkittransitionend = {};
var onwheel = {};
var onauxclick = {};
var ongotpointercapture = {};
var onlostpointercapture = {};
var onpointerdown = {};
var onpointermove = {};
var onpointerup = {};
var onpointercancel = {};
var onpointerover = {};
var onpointerout = {};
var onpointerenter = {};
var onpointerleave = {};
var onselectstart = {};
var onselectionchange = {};
var onanimationend = {};
var onanimationiteration = {};
var onanimationstart = {};
var ontransitionrun = {};
var ontransitionstart = {};
var ontransitionend = {};
var ontransitioncancel = {};
var onafterprint = {};
var onbeforeprint = {};
var onbeforeunload = {};
var onhashchange = {};
var onlanguagechange = {};
var onmessage = {};
var onmessageerror = {};
var onoffline = {};
var ononline = {};
var onpagehide = {};
var onpageshow = {};
var onpopstate = {};
var onrejectionhandled = {};
var onstorage = {};
var onunhandledrejection = {};
var onunload = {};
var alert = {};
var atob = {};
var blur = {};
var btoa = {};
var cancelAnimationFrame = {};
var cancelIdleCallback = {};
var captureEvents = {};
var clearInterval = {};
var clearTimeout = {};
var close = {};
var confirm = {};
var createImageBitmap = {};
var fetch = {};
var find = {};
var focus = {};
var getComputedStyle = {};
var getSelection = {};
var matchMedia = {};
var moveBy = {};
var moveTo = {};
var open = {};
var postMessage = {};
var print = {};
var prompt = {};
var queueMicrotask = {};
var releaseEvents = {};
var reportError = {};
var requestAnimationFrame = {};
var requestIdleCallback = {};
var resizeBy = {};
var resizeTo = {};
var scroll = {};
var scrollBy = {};
var scrollTo = {};
var setInterval = {};
var setTimeout = {};
var stop = {};
var webkitCancelAnimationFrame = {};
var webkitRequestAnimationFrame = {};
var chrome = {};
var caches = {};
var cookieStore = {};
var ondevicemotion = {};
var ondeviceorientation = {};
var ondeviceorientationabsolute = {};
var showDirectoryPicker = {};
var showOpenFilePicker = {};
var showSaveFilePicker = {};
var originAgentCluster = {};
var trustedTypes = {};
var speechSynthesis = {};
var onpointerrawupdate = {};
var crossOriginIsolated = {};
var scheduler = {};
var openDatabase = {};
var webkitRequestFileSystem = {};
var webkitResolveLocalFileSystemURL = {};
var cr = {};


gg = { m: function(g) {
var o = 0;
switch (g) {
case 359:
case 3739:
case 976:
case 2056:
case 537:
case 2333:
case 877:
case 1240:
case 2157:
case 1224:
case 2017:
case 4005:
case 2933:
case 597:
case 813:
case 2636:
case 3193:
case 1150:
case 3567:
case 2949:
case 184:
case 3179:
case 735:
case 3005:
case 1933:
case 1636:
case 1247:
case 2010:
case 244:
case 2240:
case 3560:
case 1021:
case 1017:
case 1231:
case 539:
case 2343:
case 3733:
case 879:
case 3749:
case 357:
case 3503:
case 1785:
case 3199:
case 2237:
case 2939:
case 3173:
case 310:
case 2943:
case 599:
case 2027:
case 1044:
case 825:
case 3561:
case 1020:
case 1230:
case 3584:
case 1126:
case 2044:
case 2020:
case 1241:
case 2230:
case 283:
case 2785:
case 1237:
case 540:
case 1011:
case 1646:
case 2214:
case 1943:
case 3155:
case 2380:
case 1106:
case 2565:
case 2092:
case 542:
case 582:
case 75:
case 1576:
case 1007:
case 2980:
case 1482:
case 464:
case 1882:
case 2000:
case 860:
case 614:
case 2882:
case 1000:
case 2238:
case 2576:
case 312:
case 405:
case 3846:
case 3235:
case 411:
case 3025:
case 1381:
case 2964:
case 766:
case 2204:
case 1018:
case 463:
case 2364:
case 1981:
case 1964:
case 3529:
case 1364:
case 3568:
case 1072:
case 2283:
case 2001:
case 311:
case 1204:
case 661:
case 677:
case 4025:
case 1739:
case 2985:
case 1743:
case 2682:
case 4021:
case 682:
case 159:
case 4056:
case 1567:
case 1179:
case 3010:
case 384:
case 2560:
case 727:
case 3224:
case 3034:
case 2509:
case 2788:
case 562:
case 4034:
case 1005:
case 2739:
case 3349:
case 1985:
case 4010:
case 484:
case 3116:
case 1682:
case 3021:
case 3157:
case 3017:
case 3231:
case 525:
case 2193:
case 514:
case 3949:
case 2162:
case 641:
case 681:
case 1749:
case 4027:
case 3552:
case 1561:
case 3230:
case 1199:
case 383:
case 343:
case 3214:
case 443:
case 561:
case 3343:
case 837:
case 936:
case 786:
case 2749:
case 1584:
case 4044:
case 257:
case 4020:
case 2503:
case 3126:
case 3388:
case 3237:
case 3939:
case 3011:
case 3646:
case 513:
case 3027:
case 3151:
case 3943:
case 210:
case 3241:
case 2561:
case 264:
case 903:
case 2523:
case 3106:
case 1836:
case 922:
case 1245:
case 3387:
case 2519:
case 60:
case 3482:
case 3987:
case 3238:
case 1764:
case 3576:
case 3380:
case 1781:
case 2836:
case 3565:
case 2245:
case 3980:
case 1454:
case 112:
case 881:
case 841:
case 4069:
case 3381:
case 921:
case 1780:
case 4072:
case 2513:
case 3063:
case 2787:
case 1235:
case 1846:
case 560:
case 1025:
case 904:
case 263:
case 3596:
case 3248:
case 1529:
case 4001:
case 0:
case 4018:
case 2446:
case 2846:
case 680:
case 2025:
case 2780:
case 1513:
case 4063:
case 105:
case 111:
case 3204:
case 3364:
case 1568:
case 882:
case 842:
case 653:
case 3129:
case 2880:
case 3336:
case 228:
case 1982:
case 1887:
case 1487:
case 2071:
case 670:
case 1685:
case 918:
case 2558:
case 95:
case 351:
case 206:
case 1382:
case 869:
case 3633:
case 2274:
case 128:
case 2887:
case 2487:
case 2685:
case 2090:
case 3954:
case 2382:
case 1196:
case 3354:
case 1070:
case 3059:
case 1165:
case 2077:
case 1481:
case 2506:
case 2176:
case 531:
case 352:
case 3946:
case 871:
case 3639:
case 2864:
case 2481:
case 1077:
case 1506:
case 3555:
case 1091:
case 758:
case 4059:
case 2833:
case 473:
case 1078:
case 3184:
case 2849:
case 2242:
case 1526:
case 194:
case 3680:
case 3095:
case 134:
case 417:
case 1833:
case 2078:
case 1849:
case 935:
case 1242:
case 745:
case 4095:
case 3885:
case 234:
case 373:
case 3599:
case 193:
case 2839:
case 2439:
case 2443:
case 3664:
case 2888:
case 419:
case 4066:
case 3160:
case 1557:
case 2550:
case 1488:
case 1888:
case 672:
case 4075:
case 508:
case 1232:
case 293:
case 2098:
case 1839:
case 590:
case 1439:
case 1022:
case 1843:
case 3579:
case 3681:
case 853:
case 3593:
case 374:
case 2557:
case 1053:
case 1113:
case 3887:
case 722:
case 3685:
case 3090:
case 1129:
case 3002:
case 1168:
case 428:
case 1649:
case 4071:
case 647:
case 687:
case 1633:
case 2354:
case 151:
case 3097:
case 1954:
case 3480:
case 328:
case 2336:
case 3746:
case 4002:
case 2649:
case 571:
case 831:
case 4090:
case 567:
case 3196:
case 3165:
case 3481:
case 3881:
case 1123:
case 721:
case 1119:
case 1059:
case 2555:
case 3754:
case 649:
case 2782:
case 1639:
case 630:
case 3091:
case 1555:
case 2346:
case 892:
case 4070:
case 3176:
case 572:
case 832:
case 608:
case 2688:
case 3864:
case 3464:
case 1184:
case 3078:
case 394:
case 808:
case 273:
case 1680:
case 826:
case 3551:
case 3012:
case 3849:
case 2184:
case 117:
case 2562:
case 1103:
case 2680:
case 150:
case 1599:
case 173:
case 4078:
case 1687:
case 393:
case 219:
case 3098:
case 2579:
case 2593:
case 691:
case 1160:
case 4022:
case 333:
case 274:
case 3232:
case 986:
case 736:
case 433:
case 3022:
case 3843:
case 847:
case 2664:
case 3888:
case 493:
case 3550:
case 1167:
case 1579:
case 1593:
case 1282:
case 1974:
case 3127:
case 3051:
case 3108:
case 1595:
case 3111:
case 1838:
case 522:
case 1438:
case 3445:
case 238:
case 3026:
case 858:
case 81:
case 565:
case 100:
case 1073:
case 2838:
case 198:
case 3120:
case 3144:
case 3624:
case 771:
case 767:
case 645:
case 685:
case 138:
case 2062:
case 2079:
case 1448:
case 1848:
case 504:
case 2093:
case 960:
case 521:
case 3057:
case 4050:
case 3156:
case 1105:
case 2566:
case 3435:
case 3134:
case 2994:
case 2483:
case 2883:
case 4016:
case 2448:
case 3110:
case 3050:
case 1093:
case 2105:
case 3614:
case 2394:
case 1566:
case 3774:
case 769:
case 3630:
case 24:
case 3172:
case 2942:
case 124:
case 2431:
case 2831:
case 1440:
case 115:
case 753:
case 3590:
case 3502:
case 1431:
case 2840:
case 3118:
case 3101:
case 2424:
case 215:
case 3058:
case 1847:
case 1447:
case 356:
case 224:
case 962:
case 1645:
case 3:
case 3638:
case 3571:
case 2553:
case 925:
case 1430:
case 4006:
case 2841:
case 1814:
case 123:
case 2437:
case 46:
case 1559:
case 202:
case 2814:
case 223:
case 3386:
case 36:
case 2830:
case 2430:
case 536:
case 61:
case 876:
case 2559:
case 3986:
case 1332:
case 3006:
case 3577:
case 913:
case 3595:
case 2254:
case 3438:
case 3838:
case 3889:
case 2624:
case 400:
case 4073:
case 2512:
case 1845:
case 1236:
case 732:
case 1026:
case 3062:
case 1647:
case 1578:
case 1120:
case 821:
case 300:
case 3073:
case 3099:
case 338:
case 2845:
case 2647:
case 1624:
case 1640:
case 2631:
case 2134:
case 3994:
case 3883:
case 3483:
case 3848:
case 1637:
case 2774:
case 1435:
case 1641:
case 4079:
case 1016:
case 2630:
case 941:
case 38:
case 1110:
case 822:
case 3093:
case 44:
case 2117:
case 3804:
case 51:
case 2598:
case 2637:
case 620:
case 1614:
case 1522:
case 836:
case 665:
case 3840:
case 747:
case 3424:
case 90:
case 1172:
case 820:
case 324:
case 896:
case 2571:
case 3553:
case 3447:
case 2172:
case 3942:
case 156:
case 1:
case 3645:
case 3431:
case 1118:
case 1101:
case 1689:
case 1571:
case 3342:
case 3125:
case 1638:
case 401:
case 2502:
case 1163:
case 415:
case 302:
case 2128:
case 2386:
case 1192:
case 939:
case 789:
case 3430:
case 749:
case 1100:
case 1604:
case 3559:
case 1570:
case 621:
case 999:
case 2006:
case 2648:
case 2100:
case 790:
case 3932:
case 3837:
case 940:
case 730:
case 1006:
case 1577:
case 2742:
case 3332:
case 2604:
case 402:
case 1683:
case 3115:
case 423:
case 3055:
case 2347:
case 4065:
case 3741:
case 3528:
case 3076:
case 3569:
case 3177:
case 2442:
case 953:
case 527:
case 2233:
case 2931:
case 2159:
case 1940:
case 1924:
case 2340:
case 779:
case 2324:
case 3592:
case 3500:
case 1931:
case 2515:
case 1159:
case 2940:
case 2924:
case 1442:
case 1842:
case 725:
case 1233:
case 575:
case 3731:
case 2341:
case 2068:
case 1330:
case 255:
case 1314:
case 2013:
case 895:
case 2153:
case 529:
case 2029:
case 1914:
case 3563:
case 3197:
case 2432:
case 954:
case 1525:
case 2239:
case 3486:
case 155:
case 2314:
case 586:
case 1341:
case 3724:
case 1068:
case 2330:
case 1243:
case 3102:
case 2914:
case 1832:
case 2525:
case 1432:
case 1239:
case 713:
case 3190:
case 2930:
case 1288:
case 1153:
case 416:
case 3510:
case 1338:
case 2735:
case 2280:
case 3122:
case 1060:
case 2338:
case 695:
case 2389:
case 1175:
case 3783:
case 2067:
case 1280:
case 866:
case 967:
case 188:
case 1735:
case 2874:
case 2287:
case 2989:
case 3556:
case 760:
case 2264:
case 19:
case 2304:
case 1281:
case 13:
case 107:
case 1494:
case 3052:
case 2904:
case 3112:
case 2383:
case 4052:
case 3527:
case 3789:
case 3511:
case 2348:
case 2494:
case 1745:
case 2894:
case 2003:
case 2948:
case 2281:
case 1084:
case 2730:
case 987:
case 3324:
case 947:
case 1528:
case 886:
case 1507:
case 2714:
case 168:
case 2674:
case 2285:
case 3515:
case 3940:
case 2170:
case 268:
case 1674:
case 2737:
case 1285:
case 2741:
case 3331:
case 535:
case 2076:
case 875:
case 3947:
case 2177:
case 1065:
case 3931:
case 595:
case 2191:
case 3159:
case 3019:
case 1518:
case 2486:
case 2886:
case 4029:
case 1747:
case 2694:
case 949:
case 2740:
case 739:
case 3914:
case 455:
case 3525:
case 1197:
case 2190:
case 3930:
case 1171:
case 4068:
case 990:
case 2731:
case 1724:
case 2518:
case 2501:
case 2171:
case 3013:
case 930:
case 780:
case 3288:
case 3153:
case 2563:
case 1102:
case 827:
case 3243:
case 3432:
case 926:
case 3832:
case 2748:
case 3338:
case 2521:
case 627:
case 1945:
case 488:
case 3067:
case 2783:
case 4060:
case 2198:
case 27:
case 1345:
case 932:
case 3989:
case 3175:
case 2510:
case 2704:
case 4009:
case 1748:
case 1521:
case 3060:
case 2534:
case 348:
case 388:
case 2345:
case 1556:
case 3505:
case 17:
case 3383:
case 2508:
case 629:
case 1935:
case 1544:
case 4084:
case 991:
case 3348:
case 2738:
case 39:
case 3894:
case 1335:
case 1052:
case 1112:
case 3686:
case 3948:
case 3281:
case 931:
case 33:
case 741:
case 566:
case 4003:
case 2520:
case 407:
case 1738:
case 3304:
case 1527:
case 2935:
case 1511:
case 49:
case 686:
case 3745:
case 2052:
case 2112:
case 857:
case 956:
case 612:
case 237:
case 3709:
case 2083:
case 3767:
case 664:
case 2361:
case 3850:
case 3450:
case 2606:
case 2048:
case 2384:
case 10:
case 3816:
case 3416:
case 768:
case 425:
case 3225:
case 2893:
case 2272:
case 1606:
case 2479:
case 1903:
case 1218:
case 3457:
case 1083:
case 1201:
case 1960:
case 96:
case 1752:
case 2462:
case 2862:
case 859:
case 1360:
case 1499:
case 2038:
case 313:
case 3761:
case 2228:
case 2207:
case 2909:
case 2367:
case 1585:
case 4045:
case 1967:
case 2752:
case 3045:
case 3215:
case 1038:
case 2292:
case 461:
case 1909:
case 1207:
case 280:
case 3451:
case 3851:
case 1329:
case 1855:
case 2765:
case 1968:
case 3806:
case 1037:
case 1227:
case 2154:
case 1211:
case 1041:
case 1616:
case 1776:
case 2244:
case 3564:
case 1368:
case 2030:
case 77:
case 2968:
case 3719:
case 1650:
case 3693:
case 2136:
case 3996:
case 2313:
case 2329:
case 2855:
case 2657:
case 2041:
case 1244:
case 2913:
case 805:
case 2368:
case 2037:
case 1014:
case 2227:
case 182:
case 2211:
case 1146:
case 3580:
case 1323:
case 460:
case 3458:
case 1919:
case 1217:
case 2040:
case 1221:
case 1796:
case 2234:
case 3965:
case 3662:
case 2210:
case 1626:
case 1923:
case 3587:
case 3729:
case 3976:
case 3713:
case 864:
case 3673:
case 2319:
case 3699:
case 657:
case 978:
case 812:
case 2626:
case 2047:
case 2919:
case 1040:
case 141:
case 3376:
case 1234:
case 2031:
case 179:
case 3384:
case 497:
case 1709:
case 1588:
case 2816:
case 4083:
case 2225:
case 2352:
case 1539:
case 437:
case 3984:
case 1850:
case 3879:
case 114:
case 2857:
case 2457:
case 3004:
case 1767:
case 2952:
case 4004:
case 2543:
case 3263:
case 915:
case 3303:
case 901:
case 1416:
case 2588:
case 1816:
case 3961:
case 3218:
case 1457:
case 1655:
case 3606:
case 1760:
case 3048:
case 1549:
case 4089:
case 3752:
case 1533:
case 4038:
case 499:
case 161:
case 2784:
case 177:
case 3899:
case 3360:
case 3499:
case 884:
case 1761:
case 2451:
case 1215:
case 1784:
case 440:
case 277:
case 2549:
case 3967:
case 1426:
case 3462:
case 2533:
case 1045:
case 213:
case 510:
case 399:
case 3909:
case 3228:
case 2761:
case 1851:
case 1451:
case 62:
case 1406:
case 2719:
case 1806:
case 3136:
case 564:
case 3313:
case 2723:
case 4014:
case 3657:
case 442:
case 1182:
case 3616:
case 1564:
case 3776:
case 3037:
case 3208:
case 748:
case 3211:
case 938:
case 4037:
case 3765:
case 1719:
case 3650:
case 2806:
case 1693:
case 3014:
case 3220:
case 3030:
case 709:
case 3323:
case 1365:
case 4024:
case 260:
case 3651:
case 563:
case 4040:
case 1580:
case 1205:
case 3923:
case 1458:
case 1858:
case 3221:
case 505:
case 3796:
case 511:
case 2205:
case 4031:
case 79:
case 1699:
case 1729:
case 4047:
case 2858:
case 1376:
case 3234:
case 2965:
case 3210:
case 2662:
case 2298:
case 1032:
case 1429:
case 1222:
case 2546:
case 292:
case 3266:
case 3187:
case 1813:
case 1955:
case 1652:
case 3603:
case 371:
case 1868:
case 852:
case 2758:
case 367:
case 467:
case 2413:
case 2032:
case 2429:
case 2829:
case 2355:
case 1546:
case 192:
case 3180:
case 2468:
case 2868:
case 1758:
case 3275:
case 2955:
case 1419:
case 2706:
case 1819:
case 1212:
case 674:
case 2278:
case 3667:
case 1823:
case 1554:
case 369:
case 231:
case 372:
case 2042:
case 472:
case 1278:
case 2823:
case 2212:
case 191:
case 3660:
case 3582:
case 778:
case 3295:
case 131:
case 2094:
case 1291:
case 3950:
case 287:
case 470:
case 2803:
case 3350:
case 2185:
case 2461:
case 3133:
case 819:
case 594:
case 3316:
case 187:
case 2484:
case 147:
case 3149:
case 2884:
case 3668:
case 1803:
case 3957:
case 3259:
case 1270:
case 3852:
case 3452:
case 968:
case 651:
case 1185:
case 3613:
case 370:
case 3916:
case 1461:
case 249:
case 1716:
case 190:
case 2202:
case 108:
case 454:
case 2290:
case 1460:
case 1399:
case 2750:
case 2867:
case 2962:
case 1757:
case 2271:
case 1074:
case 208:
case 1290:
case 916:
case 652:
case 2716:
case 2973:
case 1809:
case 817:
case 3623:
case 1867:
case 1467:
case 354:
case 2757:
case 873:
case 2373:
case 533:
case 3793:
case 230:
case 2399:
case 2460:
case 3779:
case 1750:
case 3619:
case 1661:
case 700:
case 1187:
case 3413:
case 1306:
case 3032:
case 432:
case 3355:
case 3429:
case 1906:
case 2684:
case 2496:
case 2896:
case 3955:
case 988:
case 948:
case 1180:
case 2266:
case 392:
case 2661:
case 2187:
case 2306:
case 551:
case 2086:
case 2603:
case 1684:
case 2906:
case 1496:
case 3823:
case 3423:
case 1958:
case 2660:
case 3212:
case 172:
case 2476:
case 2295:
case 491:
case 3554:
case 2958:
case 828:
case 391:
case 633:
case 3536:
case 1755:
case 693:
case 1876:
case 1295:
case 269:
case 93:
case 552:
case 1582:
case 2133:
case 2316:
case 893:
case 3884:
case 2149:
case 1950:
case 3277:
case 2668:
case 2957:
case 3291:
case 628:
case 2799:
case 3379:
case 3751:
case 487:
case 447:
case 2773:
case 573:
case 2629:
case 550:
case 1259:
case 3270:
case 1852:
case 1316:
case 1149:
case 387:
case 3803:
case 3403:
case 1668:
case 1629:
case 1357:
case 2350:
case 1613:
case 3461:
case 3861:
case 1916:
case 2188:
case 955:
case 2326:
case 3297:
case 3716:
case 519:
case 2951:
case 3676:
case 2143:
case 326:
case 3757:
case 254:
case 2926:
case 2793:
case 574:
case 3373:
case 834:
case 489:
case 3860:
case 3399:
case 3809:
case 1143:
case 1951:
case 3202:
case 1188:
case 426:
case 723:
case 3290:
case 1326:
case 1793:
case 3750:
case 1619:
case 3467:
case 1623:
case 3867:
case 154:
case 3665:
case 598:
case 1795:
case 3663:
case 1827:
case 1808:
case 3966:
case 1922:
case 222:
case 1411:
case 500:
case 2998:
case 203:
case 964:
case 1145:
case 538:
case 878:
case 6:
case 265:
case 3601:
case 2827:
case 2427:
case 2808:
case 2811:
case 2625:
case 1420:
case 1820:
case 3375:
case 2795:
case 1844:
case 165:
case 1398:
case 2255:
case 2145:
case 751:
case 3148:
case 3669:
case 2834:
case 1775:
case 1817:
case 1417:
case 3258:
case 1421:
case 221:
case 1912:
case 2766:
case 66:
case 911:
case 905:
case 3798:
case 3405:
case 3805:
case 1135:
case 3395:
case 2817:
case 2821:
case 3104:
case 121:
case 104:
case 3692:
case 2312:
case 3995:
case 2135:
case 3722:
case 2456:
case 54:
case 3600:
case 2856:
case 752:
case 1378:
case 1977:
case 1991:
case 4046:
case 1586:
case 2818:
case 3140:
case 717:
case 2401:
case 2970:
case 385:
case 3702:
case 3620:
case 1377:
case 3532:
case 773:
case 1391:
case 2863:
case 501:
case 3131:
case 2991:
case 86:
case 3257:
case 3959:
case 1418:
case 1818:
case 1970:
case 2472:
case 959:
case 524:
case 2293:
case 3425:
case 3611:
case 3608:
case 445:
case 1863:
case 3216:
case 719:
case 1800:
case 2428:
case 2828:
case 3054:
case 120:
case 3114:
case 2390:
case 2869:
case 774:
case 3610:
case 1759:
case 3542:
case 1397:
case 3634:
case 1807:
case 856:
case 1407:
case 502:
case 8:
case 2997:
case 1605:
case 2492:
case 957:
case 2971:
case 2400:
case 2800:
case 3953:
case 3777:
case 4054:
case 3815:
case 2371:
case 910:
case 3036:
case 1390:
case 1262:
case 2759:
case 465:
case 3922:
case 1138:
case 3625:
case 1778:
case 1601:
case 706:
case 1366:
case 3145:
case 1206:
case 2189:
case 3444:
case 322:
case 3998:
case 1975:
case 2778:
case 3398:
case 601:
case 615:
case 2366:
case 3417:
case 1258:
case 3817:
case 3421:
case 3912:
case 3821:
case 1148:
case 1669:
case 1405:
case 3312:
case 421:
case 3135:
case 2722:
case 2574:
case 404:
case 158:
case 3856:
case 1798:
case 11:
case 304:
case 3978:
case 2669:
case 3834:
case 2258:
case 2183:
case 1104:
case 1722:
case 258:
case 1600:
case 2798:
case 21:
case 2805:
case 1692:
case 2405:
case 578:
case 838:
case 1995:
case 623:
case 2607:
case 2628:
case 2131:
case 3991:
case 3586:
case 276:
case 2257:
case 185:
case 145:
case 3872:
case 1250:
case 638:
case 2147:
case 3279:
case 823:
case 3293:
case 1532:
case 1790:
case 2046:
case 2627:
case 2771:
case 2216:
case 698:
case 3377:
case 1147:
case 1131:
case 3818:
case 1959:
case 176:
case 3401:
case 3970:
case 2124:
case 245:
case 2702:
case 2644:
case 1797:
case 984:
case 1359:
case 1825:
case 944:
case 2790:
case 1046:
case 1608:
case 1054:
case 824:
case 3273:
case 320:
case 2251:
case 3299:
case 3997:
case 3892:
case 336:
case 3800:
case 56:
case 3400:
case 801:
case 2141:
case 2621:
case 3397:
case 2815:
case 2415:
case 2791:
case 1770:
case 2226:
case 1610:
case 3990:
case 793:
case 1656:
case 496:
case 1953:
case 3828:
case 3428:
case 3807:
case 1251:
case 1137:
case 1353:
case 3869:
case 3469:
case 2610:
case 1621:
case 1777:
case 1617:
case 1415:
case 3302:
case 3707:
case 3541:
case 2261:
case 1372:
case 2301:
case 67:
case 816:
case 2666:
case 2081:
case 950:
case 1715:
case 1891:
case 973:
case 2901:
case 2470:
case 395:
case 3769:
case 1318:
case 1301:
case 3622:
case 1666:
case 495:
case 1963:
case 3514:
case 2064:
case 3792:
case 3530:
case 2891:
case 1363:
case 435:
case 3859:
case 3325:
case 1918:
case 3459:
case 1470:
case 1870:
case 1203:
case 2877:
case 1081:
case 2477:
case 2715:
case 3547:
case 2267:
case 919:
case 2969:
case 186:
case 3531:
case 2307:
case 555:
case 2890:
case 1725:
case 2087:
case 1471:
case 1900:
case 2402:
case 1497:
case 1992:
case 3772:
case 3524:
case 1307:
case 175:
case 246:
case 2080:
case 1928:
case 1802:
case 2897:
case 3132:
case 129:
case 2992:
case 1490:
case 1890:
case 2871:
case 2900:
case 3853:
case 710:
case 3453:
case 2320:
case 3734:
case 2344:
case 418:
case 764:
case 3670:
case 3504:
case 1311:
case 548:
case 588:
case 2705:
case 3174:
case 1213:
case 712:
case 1229:
case 1908:
case 1422:
case 3866:
case 3466:
case 2498:
case 1039:
case 3583:
case 2659:
case 2308:
case 2327:
case 3691:
case 2311:
case 1344:
case 3296:
case 3721:
case 3677:
case 3548:
case 2229:
case 2927:
case 1535:
case 1498:
case 35:
case 668:
case 1705:
case 318:
case 2088:
case 2213:
case 1944:
case 466:
case 1956:
case 3690:
case 1317:
case 1321:
case 705:
case 1223:
case 2545:
case 1356:
case 1033:
case 3194:
case 3305:
case 1219:
case 3697:
case 2321:
case 3495:
case 3895:
case 3276:
case 3711:
case 3671:
case 1310:
case 2917:
case 2921:
case 2412:
case 2812:
case 366:
case 2049:
case 2223:
case 1878:
case 4085:
case 2925:
case 1537:
case 1698:
case 2700:
case 427:
case 1728:
case 4081:
case 1541:
case 688:
case 2530:
case 3491:
case 3891:
case 2859:
case 195:
case 2252:
case 3972:
case 3284:
case 3877:
case 855:
case 1530:
case 568:
case 994:
case 3318:
case 3963:
case 1700:
case 1514:
case 4064:
case 327:
case 1142:
case 3363:
case 1459:
case 934:
case 1325:
case 1859:
case 1252:
case 3870:
case 3901:
case 2540:
case 2772:
case 2524:
case 2915:
case 429:
case 3300:
case 1678:
case 1701:
case 3080:
case 3497:
case 2132:
case 3471:
case 607:
case 3267:
case 375:
case 2547:
case 2678:
case 2701:
case 993:
case 1540:
case 1612:
case 1524:
case 3328:
case 3890:
case 933:
case 1453:
case 446:
case 1853:
case 3802:
case 3402:
case 2583:
case 3659:
case 1710:
case 2875:
case 2548:
case 2721:
case 2717:
case 2756:
case 3908:
case 807:
case 3927:
case 3043:
case 1466:
case 3822:
case 3911:
case 3422:
case 3039:
case 3088:
case 3213:
case 1677:
case 1721:
case 1583:
case 4043:
case 4039:
case 15:
case 2174:
case 118:
case 1756:
case 2466:
case 3498:
case 2895:
case 2276:
case 1744:
case 2495:
case 3653:
case 3956:
case 2671:
case 2708:
case 1085:
case 1690:
case 1305:
case 3917:
case 3812:
case 3412:
case 3921:
case 266:
case 1265:
case 3033:
case 3356:
case 809:
case 1671:
case 3310:
case 3334:
case 1895:
case 2602:
case 3478:
case 3545:
case 2265:
case 2194:
case 2305:
case 888:
case 848:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1759928402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,];
var gg_b = "1759928402/";

function subdomain_from_url(url, base, dir) {
        var retval = '';
        if (!base) {
                if (dir === 'webp') {
                        retval = 'w';
                } else if (dir === 'avif') {
                        retval = 'a';
                }
        }
        
        var b = 16;
        
        var r = /\/[0-9a-f]{61}([0-9a-f]{2})([0-9a-f])/;
        var m = r.exec(url);
        if (!m) {
                return retval;
        }
        
        var g = parseInt(m[2]+m[1], b);
        if (!isNaN(g)) {
                if (base) {
                        retval = String.fromCharCode(97 + gg_m[g]) + base;
                } else {
                        retval = retval + (1+gg_m[g]);
                }
        }
        
        return retval;
}


function url_from_url(url, base, dir) {
        return url.replace(/\/\/..?\.(?:gold-usergeneratedcontent\.net|hitomi\.la)\//, '//'+subdomain_from_url(url, base, dir)+'.'+domain2+'/');
}

function full_path_from_hash(hash) {
        return gg_b+gg_s(hash)+'/'+hash;
}


function real_full_path_from_hash(hash) {
        return hash.replace(/^.*(..)(.)$/, '$2/$1/'+hash);
}

function url_from_hash(_galleryid, image, dir, ext) {
        ext = ext || dir || image.name.split('.').pop();
        if (dir === 'webp' || dir === 'avif') {
                dir = '';
        } else {
                dir += '/';
        }
        
        return 'https://a.'+domain2+'/'+dir+full_path_from_hash(image.hash)+'.'+ext;
}

function url_from_url_from_hash(_galleryid, image, dir, ext, base) {
        if ('tn' === base) {
                return url_from_url('https://a.'+domain2+'/'+dir+'/'+real_full_path_from_hash(image.hash)+'.'+ext, base);
        }
        return url_from_url(url_from_hash(_galleryid, image, dir, ext), base, dir);
}


function hitomi_get_image_list() {
  files = galleryinfo["files"];
  dir = "webp";
  type = "webp";
  base = "webp";
  result = [];
  btresult = [];
  stresult = [];
  for (var file of files) {
    result.push(url_from_url(url_from_hash(0, file, dir), undefined, dir));
    btresult.push(url_from_url_from_hash(0, file, 'webpbigtn', 'webp', 'tn'));
    stresult.push(url_from_url_from_hash(0, file, type+'smalltn', type, 'tn'));
  }
  return JSON.stringify({
    btresult: btresult,
    stresult: stresult,
    result: result,
  });
}

function hitomi_get_header_content(id) {
  return JSON.stringify({
      'referer': `https://hitomi.la/reader/${id}.html`,
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.3',
  });
}
