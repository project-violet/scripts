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
case 2568:
case 1639:
case 330:
case 3599:
case 128:
case 2624:
case 797:
case 786:
case 1268:
case 3111:
case 3647:
case 253:
case 615:
case 799:
case 4035:
case 1958:
case 1799:
case 821:
case 551:
case 1611:
case 217:
case 1228:
case 3010:
case 3634:
case 3117:
case 3588:
case 3501:
case 1738:
case 356:
case 2344:
case 172:
case 2294:
case 2308:
case 2156:
case 2381:
case 4052:
case 433:
case 1886:
case 1141:
case 81:
case 1617:
case 3327:
case 1134:
case 2274:
case 3794:
case 1836:
case 3178:
case 2129:
case 3684:
case 765:
case 1322:
case 352:
case 3612:
case 3538:
case 62:
case 2326:
case 1580:
case 344:
case 761:
case 650:
case 3670:
case 979:
case 3092:
case 204:
case 1657:
case 968:
case 1097:
case 4034:
case 3948:
case 1623:
case 3163:
case 2832:
case 3904:
case 2280:
case 1190:
case 28:
case 2366:
case 2625:
case 2116:
case 3780:
case 2450:
case 963:
case 2814:
case 1077:
case 1170:
case 2882:
case 2230:
case 3157:
case 664:
case 3690:
case 3123:
case 1663:
case 2720:
case 555:
case 3004:
case 2646:
case 843:
case 1575:
case 2404:
case 611:
case 2275:
case 892:
case 1853:
case 3992:
case 1918:
case 1909:
case 2345:
case 3972:
case 1185:
case 3862:
case 3151:
case 3775:
case 896:
case 1977:
case 2573:
case 848:
case 887:
case 1867:
case 2591:
case 457:
case 3060:
case 69:
case 3167:
case 3317:
case 1653:
case 2075:
case 351:
case 1851:
case 2144:
case 1384:
case 2119:
case 1291:
case 1341:
case 2980:
case 3885:
case 3127:
case 1667:
case 740:
case 83:
case 1334:
case 3020:
case 3495:
case 418:
case 2131:
case 3835:
case 2930:
case 3153:
case 2420:
case 459:
case 1073:
case 2187:
case 1297:
case 2518:
case 2632:
case 310:
case 1823:
case 1347:
case 2080:
case 224:
case 1857:
case 154:
case 552:
case 3389:
case 3870:
case 2975:
case 1218:
case 60:
case 2865:
case 3311:
case 1993:
case 3161:
case 160:
case 1863:
case 3430:
case 4043:
case 635:
case 3272:
case 1906:
case 1973:
case 2649:
case 2030:
case 2614:
case 556:
case 3121:
case 3920:
case 237:
case 2825:
case 3503:
case 198:
case 1488:
case 631:
case 2705:
case 727:
case 1335:
case 2:
case 3494:
case 3834:
case 2902:
case 1401:
case 544:
case 2145:
case 1438:
case 142:
case 3186:
case 3351:
case 3474:
case 1776:
case 3884:
case 2333:
case 1258:
case 44:
case 891:
case 612:
case 2074:
case 1068:
case 2540:
case 2002:
case 1407:
case 2126:
case 4022:
case 2824:
case 3402:
case 2994:
case 1240:
case 3113:
case 1839:
case 1390:
case 2159:
case 762:
case 2166:
case 1811:
case 355:
case 801:
case 2864:
case 1842:
case 1889:
case 1479:
case 2600:
case 3357:
case 3323:
case 3696:
case 3543:
case 672:
case 2658:
case 399:
case 3056:
case 1536:
case 3069:
case 1441:
case 1964:
case 2942:
case 2989:
case 3375:
case 1484:
case 3786:
case 2469:
case 2360:
case 2911:
case 1874:
case 1412:
case 2745:
case 1743:
case 3888:
case 1254:
case 3736:
case 1434:
case 3029:
case 491:
case 1894:
case 3676:
case 2078:
case 1924:
case 2429:
case 2320:
case 249:
case 2828:
case 1064:
case 2042:
case 1447:
case 2089:
case 2500:
case 3411:
case 309:
case 3969:
case 628:
case 365:
case 2213:
case 3442:
case 2759:
case 1215:
case 3266:
case 3899:
case 1024:
case 3807:
case 2515:
case 756:
case 115:
case 2640:
case 3083:
case 2267:
case 1925:
case 813:
case 1722:
case 111:
case 1301:
case 2731:
case 2806:
case 478:
case 3208:
case 3394:
case 2963:
case 1435:
case 527:
case 2148:
case 1895:
case 641:
case 3727:
case 857:
case 2104:
case 3916:
case 585:
case 9:
case 473:
case 2708:
case 529:
case 1338:
case 361:
case 744:
case 859:
case 132:
case 1875:
case 2957:
case 1527:
case 3767:
case 2691:
case 467:
case 25:
case 314:
case 2549:
case 2582:
case 2737:
case 1214:
case 1249:
case 2192:
case 1830:
case 495:
case 12:
case 3983:
case 3302:
case 1025:
case 1946:
case 3761:
case 680:
case 2172:
case 4003:
case 2951:
case 2057:
case 164:
case 2150:
case 3237:
case 1065:
case 2609:
case 3457:
case 2532:
case 2618:
case 1563:
case 2061:
case 1630:
case 340:
case 1082:
case 3757:
case 1049:
case 2487:
case 4038:
case 3944:
case 3461:
case 402:
case 3908:
case 2263:
case 953:
case 2021:
case 4088:
case 2809:
case 2927:
case 3763:
case 3931:
case 4001:
case 2953:
case 919:
case 3421:
case 1680:
case 2565:
case 751:
case 660:
case 2223:
case 3552:
case 507:
case 3081:
case 3987:
case 290:
case 3044:
case 2606:
case 3535:
case 3008:
case 3019:
case 1914:
case 489:
case 1303:
case 1982:
case 443:
case 1949:
case 2310:
case 1785:
case 2444:
case 2961:
case 4079:
case 2067:
case 2783:
case 487:
case 2431:
case 1932:
case 1396:
case 2251:
case 671:
case 2305:
case 3427:
case 3233:
case 710:
case 3031:
case 2546:
case 2027:
case 2120:
case 565:
case 277:
case 385:
case 1107:
case 1589:
case 2426:
case 334:
case 2564:
case 608:
case 1199:
case 263:
case 3547:
case 3711:
case 1179:
case 3945:
case 3607:
case 421:
case 3742:
case 3789:
case 1747:
case 327:
case 2668:
case 3926:
case 1598:
case 116:
case 3638:
case 3512:
case 1101:
case 2858:
case 3269:
case 3256:
case 1900:
case 2348:
case 2913:
case 1517:
case 570:
case 1188:
case 3896:
case 1741:
case 3966:
case 1915:
case 3959:
case 3798:
case 693:
case 3486:
case 2756:
case 2769:
case 1712:
case 3803:
case 366:
case 2445:
case 514:
case 3229:
case 838:
case 3045:
case 1054:
case 3534:
case 2752:
case 3449:
case 3872:
case 3414:
case 1525:
case 3765:
case 624:
case 2955:
case 886:
case 2014:
case 2630:
case 1877:
case 945:
case 2049:
case 20:
case 1967:
case 1897:
case 1565:
case 3516:
case 3725:
case 2032:
case 1257:
case 928:
case 284:
case 3922:
case 2557:
case 3432:
case 882:
case 1953:
case 3892:
case 2265:
case 1021:
case 721:
case 637:
case 66:
case 2523:
case 1160:
case 2785:
case 1419:
case 2462:
case 3193:
case 1961:
case 2914:
case 2303:
case 1481:
case 2949:
case 3062:
case 2055:
case 2695:
case 190:
case 3583:
case 1693:
case 1546:
case 1027:
case 3660:
case 71:
case 2551:
case 1053:
case 2735:
case 1251:
case 3358:
case 972:
case 809:
case 1305:
case 1891:
case 2246:
case 1431:
case 2932:
case 2396:
case 3943:
case 3318:
case 163:
case 3168:
case 2264:
case 2199:
case 1392:
case 2589:
case 1426:
case 2000:
case 980:
case 1013:
case 177:
case 706:
case 2539:
case 2747:
case 2015:
case 3377:
case 1459:
case 3415:
case 1350:
case 1239:
case 1840:
case 1372:
case 1986:
case 2734:
case 1348:
case 1304:
case 2188:
case 3241:
case 474:
case 3212:
case 2101:
case 216:
case 1036:
case 1729:
case 3556:
case 6:
case 57:
case 2674:
case 1217:
case 2598:
case 1086:
case 2694:
case 814:
case 2578:
case 3529:
case 3371:
case 2712:
case 1445:
case 1278:
case 2741:
case 3810:
case 1110:
case 778:
case 1456:
case 1469:
case 1360:
case 3243:
case 1911:
case 1745:
case 1017:
case 3393:
case 2441:
case 2964:
case 1942:
case 1989:
case 2176:
case 3012:
case 3084:
case 2536:
case 769:
case 3041:
case 1098:
case 3545:
case 3610:
case 1554:
case 54:
case 73:
case 2924:
case 773:
case 3373:
case 3306:
case 3158:
case 1939:
case 2743:
case 2196:
case 1286:
case 3140:
case 1213:
case 3464:
case 3715:
case 3047:
case 1998:
case 3912:
case 2200:
case 1042:
case 881:
case 1500:
case 3559:
case 1726:
case 1039:
case 3566:
case 653:
case 188:
case 3700:
case 1978:
case 954:
case 3934:
case 617:
case 3191:
case 2435:
case 2895:
case 2388:
case 1104:
case 3262:
case 1873:
case 236:
case 1555:
case 3508:
case 3581:
case 3820:
case 2925:
case 946:
case 1923:
case 3085:
case 559:
case 1957:
case 3531:
case 829:
case 2553:
case 518:
case 1719:
case 3446:
case 1253:
case 232:
case 2875:
case 1433:
case 3952:
case 3587:
case 3732:
case 22:
case 250:
case 2025:
case 1261:
case 2214:
case 2249:
case 1192:
case 2282:
case 1582:
case 1737:
case 3672:
case 15:
case 120:
case 701:
case 2065:
case 68:
case 3328:
case 3052:
case 1787:
case 1618:
case 3177:
case 3782:
case 908:
case 3537:
case 3749:
case 1057:
case 1150:
case 3465:
case 2946:
case 37:
case 1023:
case 1172:
case 1697:
case 3985:
case 2312:
case 2162:
case 3493:
case 1144:
case 2384:
case 3833:
case 578:
case 1119:
case 3155:
case 1369:
case 321:
case 569:
case 1591:
case 3548:
case 2627:
case 2093:
case 4026:
case 830:
case 3681:
case 53:
case 1655:
case 3608:
case 1329:
case 2122:
case 271:
case 3644:
case 2271:
case 429:
case 434:
case 2667:
case 1704:
case 573:
case 1772:
case 2209:
case 31:
case 2993:
case 4045:
case 3114:
case 3149:
case 3182:
case 466:
case 2857:
case 522:
case 139:
case 3592:
case 852:
case 1509:
case 2297:
case 1632:
case 915:
case 600:
case 2661:
case 3797:
case 1825:
case 1137:
case 3324:
case 3550:
case 1030:
case 1614:
case 1577:
case 2973:
case 2906:
case 260:
case 2863:
case 1995:
case 3687:
case 1:
case 1902:
case 1383:
case 3758:
case 932:
case 3999:
case 306:
case 1705:
case 3276:
case 3907:
case 4037:
case 757:
case 298:
case 1654:
case 3088:
case 1074:
case 4087:
case 936:
case 302:
case 1558:
case 911:
case 2776:
case 1333:
case 3856:
case 2258:
case 440:
case 242:
case 1710:
case 2898:
case 2240:
case 3988:
case 2390:
case 3468:
case 4031:
case 481:
case 2068:
case 663:
case 3659:
case 325:
case 2613:
case 2842:
case 4019:
case 679:
case 4044:
case 2370:
case 3115:
case 1159:
case 3365:
case 950:
case 4081:
case 2811:
case 1974:
case 203:
case 33:
case 3859:
case 649:
case 683:
case 2779:
case 1202:
case 4033:
case 3314:
case 3164:
case 1624:
case 3903:
case 3382:
case 3976:
case 3349:
case 3440:
case 3207:
case 228:
case 119:
case 935:
case 3728:
case 373:
case 2040:
case 1387:
case 2147:
case 2639:
case 223:
case 117:
case 2228:
case 1337:
case 245:
case 2689:
case 2642:
case 647:
case 369:
case 851:
case 688:
case 2799:
case 3279:
case 3332:
case 305:
case 3996:
case 2476:
case 2403:
case 2940:
case 2886:
case 1854:
case 2141:
case 1344:
case 3201:
case 3629:
case 3355:
case 2184:
case 1156:
case 326:
case 810:
case 2574:
case 3096:
case 1129:
case 3669:
case 3656:
case 2058:
case 1331:
case 2836:
case 414:
case 1405:
case 1274:
case 497:
case 2623:
case 1832:
case 1280:
case 620:
case 104:
case 3409:
case 3300:
case 391:
case 2821:
case 1326:
case 2580:
case 3616:
case 3887:
case 2663:
case 482:
case 506:
case 4056:
case 1814:
case 499:
case 2971:
case 2170:
case 1882:
case 1230:
case 1849:
case 18:
case 1625:
case 1116:
case 2861:
case 2909:
case 2293:
case 1183:
case 301:
case 2853:
case 1448:
case 3633:
case 1720:
case 2091:
case 1593:
case 241:
case 2867:
case 2977:
case 1506:
case 916:
case 3844:
case 2206:
case 2273:
case 1133:
case 1855:
case 587:
case 3881:
case 3793:
case 738:
case 548:
case 1295:
case 871:
case 1207:
case 432:
case 173:
case 3568:
case 4046:
case 2361:
case 167:
case 1859:
case 3815:
case 1903:
case 1382:
case 1349:
case 1314:
case 1164:
case 3624:
case 411:
case 3800:
case 169:
case 1332:
case 105:
case 2647:
case 1124:
case 981:
case 464:
case 2501:
case 2117:
case 2367:
case 2588:
case 2634:
case 3854:
case 788:
case 2774:
case 3381:
case 56:
case 3308:
case 3294:
case 3169:
case 1629:
case 3156:
case 3410:
case 1355:
case 256:
case 783:
case 2353:
case 122:
case 1238:
case 539:
case 854:
case 1458:
case 2327:
case 195:
case 450:
case 2641:
case 252:
case 2538:
case 2005:
case 1656:
case 2684:
case 1497:
case 2092:
case 1837:
case 191:
case 893:
case 3665:
case 1125:
case 1616:
case 244:
case 2652:
case 3280:
case 3832:
case 2948:
case 2163:
case 3492:
case 638:
case 1300:
case 1409:
case 304:
case 2730:
case 3882:
case 3849:
case 3814:
case 3625:
case 3366:
case 1315:
case 2780:
case 2072:
case 846:
case 67:
case 2123:
case 1477:
case 2690:
case 934:
case 898:
case 2050:
case 929:
case 4024:
case 394:
case 2685:
case 1560:
case 2260:
case 415:
case 3448:
case 2336:
case 3275:
case 1491:
case 1706:
case 1773:
case 3404:
case 101:
case 966:
case 808:
case 1808:
case 2950:
case 1844:
case 2862:
case 2151:
case 1354:
case 2386:
case 1520:
case 3760:
case 3345:
case 2220:
case 875:
case 962:
case 3506:
case 986:
case 1631:
case 121:
case 2167:
case 1504:
case 2317:
case 823:
case 997:
case 2060:
case 4015:
case 2475:
case 2248:
case 1771:
case 3119:
case 3369:
case 3460:
case 251:
case 1493:
case 2622:
case 2153:
case 3930:
case 2835:
case 982:
case 2495:
case 1791:
case 1473:
case 3095:
case 700:
case 828:
case 3329:
case 3571:
case 3420:
case 999:
case 1592:
case 64:
case 324:
case 210:
case 3080:
case 3518:
case 2161:
case 4054:
case 3772:
case 3865:
case 3597:
case 11:
case 2960:
case 1637:
case 1149:
case 2292:
case 1364:
case 3750:
case 1114:
case 2480:
case 416:
case 431:
case 3792:
case 909:
case 3995:
case 2272:
case 1132:
case 2430:
case 1797:
case 337:
case 2121:
case 1324:
case 3030:
case 3137:
case 3094:
case 2576:
case 1829:
case 1088:
case 1645:
case 880:
case 768:
case 3902:
case 779:
case 1203:
case 1999:
case 1758:
case 106:
case 961:
case 2884:
case 2812:
case 777:
case 2351:
case 4049:
case 1296:
case 2841:
case 1154:
case 3710:
case 1346:
case 2596:
case 504:
case 1505:
case 102:
case 3558:
case 659:
case 3824:
case 196:
case 3615:
case 1659:
case 3540:
case 1988:
case 2113:
case 1100:
case 1468:
case 3994:
case 1007:
case 3864:
case 1740:
case 3316:
case 1626:
case 1365:
case 2323:
case 49:
case 125:
case 657:
case 189:
case 3600:
case 143:
case 1084:
case 299:
case 753:
case 1012:
case 835:
case 3098:
case 2696:
case 2786:
case 3110:
case 1243:
case 480:
case 3360:
case 3469:
case 2838:
case 282:
case 717:
case 2375:
case 3942:
case 2498:
case 3989:
case 1306:
case 951:
case 2029:
case 2395:
case 4018:
case 4009:
case 3286:
case 3939:
case 1610:
case 3554:
case 758:
case 3320:
case 3429:
case 3078:
case 2676:
case 2603:
case 974:
case 3089:
case 3011:
case 3917:
case 2226:
case 349:
case 63:
case 667:
case 1464:
case 3998:
case 2380:
case 1715:
case 1140:
case 265:
case 3213:
case 2956:
case 209:
case 4071:
case 1912:
case 2411:
case 2330:
case 2899:
case 4091:
case 590:
case 89:
case 3640:
case 3726:
case 1559:
case 1566:
case 910:
case 388:
case 669:
case 2807:
case 1519:
case 1035:
case 1508:
case 78:
case 3267:
case 2083:
case 1820:
case 1581:
case 1990:
case 423:
case 1191:
case 3148:
case 3873:
case 3806:
case 2219:
case 2394:
case 2208:
case 579:
case 1446:
case 2522:
case 2231:
case 577:
case 2451:
case 2374:
case 4040:
case 3227:
case 1860:
case 3923:
case 3691:
case 1648:
case 1085:
case 563:
case 1604:
case 2767:
case 1222:
case 138:
case 3582:
case 214:
case 1425:
case 2287:
case 35:
case 2983:
case 1732:
case 2463:
case 3192:
case 691:
case 476:
case 3416:
case 1714:
case 1465:
case 1537:
case 1782:
case 1749:
case 3023:
case 17:
case 1052:
case 1328:
case 3609:
case 3532:
case 3787:
case 2457:
case 2016:
case 472:
case 1070:
case 1692:
case 2423:
case 1177:
case 3877:
case 3061:
case 442:
case 61:
case 3525:
case 2180:
case 3716:
case 1765:
case 1290:
case 2087:
case 1850:
case 2461:
case 2944:
case 2130:
case 1432:
case 2931:
case 498:
case 2037:
case 2763:
case 3021:
case 2216:
case 3927:
case 3809:
case 3897:
case 1516:
case 2421:
case 3257:
case 1062:
case 3606:
case 3673:
case 2467:
case 390:
case 815:
case 4028:
case 2081:
case 403:
case 3961:
case 3444:
case 1193:
case 1455:
case 3419:
case 3481:
case 2175:
case 2751:
case 76:
case 588:
case 621:
case 1022:
case 956:
case 1106:
case 2233:
case 3251:
case 1804:
case 3431:
case 2195:
case 549:
case 1848:
case 724:
case 3891:
case 3921:
case 3693:
case 3546:
case 118:
case 3564:
case 234:
case 1247:
case 285:
case 3013:
case 1397:
case 377:
case 3211:
case 2102:
case 648:
case 1309:
case 1400:
case 1168:
case 832:
case 2413:
case 4006:
case 696:
case 3242:
case 2742:
case 3466:
case 689:
case 3524:
case 643:
case 3986:
case 3372:
case 4093:
case 1128:
case 3668:
case 944:
case 1556:
case 3729:
case 262:
case 606:
case 2926:
case 2541:
case 2896:
case 3913:
case 2269:
case 1284:
case 2778:
case 266:
case 602:
case 3278:
case 1454:
case 3756:
case 1371:
case 2966:
case 1810:
case 2959:
case 2534:
case 454:
case 2601:
case 1944:
case 2962:
case 3770:
case 771:
case 2872:
case 610:
case 4074:
case 3752:
case 905:
case 2482:
case 1087:
case 2449:
case 2340:
case 3225:
case 1723:
case 30:
case 3563:
case 3082:
case 3049:
case 1757:
case 1421:
case 973:
case 3032:
case 3680:
case 2725:
case 2516:
case 1763:
case 3523:
case 93:
case 3790:
case 3265:
case 1216:
case 2270:
case 674:
case 1130:
case 2892:
case 2432:
case 1931:
case 4094:
case 1037:
case 1175:
case 1751:
case 3303:
case 3949:
case 3914:
case 2746:
case 1283:
case 515:
case 995:
case 1987:
case 1535:
case 847:
case 760:
case 651:
case 1467:
case 926:
case 1031:
case 3675:
case 1937:
case 883:
case 2285:
case 4002:
case 2022:
case 2106:
case 1233:
case 1427:
case 1413:
case 3199:
case 1547:
case 1026:
case 1739:
case 2168:
case 1679:
case 2397:
case 218:
case 129:
case 2724:
case 532:
case 134:
case 991:
case 1699:
case 3224:
case 127:
case 3539:
case 1066:
case 3747:
case 257:
case 798:
case 1711:
case 3179:
case 1945:
case 2764:
case 1607:
case 1789:
case 2415:
case 3443:
case 2805:
case 3900:
case 1256:
case 3101:
case 2212:
case 3734:
case 2391:
case 437:
case 3598:
case 1541:
case 3674:
case 703:
case 1584:
case 162:
case 331:
case 564:
case 3578:
case 3694:
case 52:
case 3054:
case 708:
case 820:
case 1534:
case 85:
case 1045:
case 1688:
case 1966:
case 4080:
case 1798:
case 901:
case 166:
case 3712:
case 1803:
case 1876:
case 3138:
case 439:
case 1486:
case 1375:
case 3964:
case 1498:
case 2754:
case 745:
case 3484:
case 535:
case 2243:
case 2041:
case 48:
case 1543:
case 1069:
case 3536:
case 2012:
case 656:
case 3924:
case 404:
case 921:
case 197:
case 2545:
case 1395:
case 800:
case 3196:
case 3743:
case 728:
case 1478:
case 2158:
case 652:
case 1801:
case 1736:
case 1029:
case 109:
case 2984:
case 2912:
case 1411:
case 630:
case 1442:
case 776:
case 2464:
case 2941:
case 1489:
case 2047:
case 2715:
case 2140:
case 3447:
case 1929:
case 1807:
case 890:
case 2559:
case 1713:
case 91:
case 107:
case 1259:
case 3215:
case 3024:
case 494:
case 2700:
case 1394:
case 1753:
case 3301:
case 868:
case 2990:
case 3567:
case 2191:
case 3435:
case 1083:
case 2581:
case 2519:
case 2035:
case 2508:
case 311:
case 3722:
case 2544:
case 458:
case 2531:
case 2648:
case 2085:
case 3527:
case 1767:
case 1916:
case 2860:
case 906:
case 332:
case 1522:
case 2755:
case 2171:
case 1231:
case 419:
case 1463:
case 3249:
case 3399:
case 3214:
case 1983:
case 350:
case 32:
case 1721:
case 3561:
case 1287:
case 2197:
case 925:
case 2672:
case 943:
case 238:
case 2650:
case 2425:
case 989:
case 996:
case 2070:
case 2692:
case 2177:
case 1237:
case 948:
case 170:
case 27:
case 2985:
case 3232:
case 1761:
case 3946:
case 3379:
case 3470:
case 531:
case 1933:
case 741:
case 2465:
case 2537:
case 3452:
case 2833:
case 735:
case 3851:
case 151:
case 3312:
case 3162:
case 2493:
case 853:
case 1885:
case 1398:
case 523:
case 1475:
case 1167:
case 3627:
case 2504:
case 3093:
case 2548:
case 468:
case 2631:
case 221:
case 3006:
case 2644:
case 3122:
case 1662:
case 2619:
case 0:
case 4013:
case 3334:
case 2406:
case 3667:
case 1127:
case 1153:
case 2149:
case 1292:
case 2182:
case 576:
case 640:
case 2364:
case 354:
case 2114:
case 3993:
case 4086:
case 2816:
case 21:
case 110:
case 3857:
case 572:
case 2550:
case 2324:
case 174:
case 79:
case 1920:
case 1121:
case 3661:
case 1890:
case 2687:
case 1272:
case 2132:
case 2709:
case 3863:
case 360:
case 1430:
case 1339:
case 3335:
case 2203:
case 2758:
case 3488:
case 206:
case 662:
case 1834:
case 3968:
case 3796:
case 3143:
case 2645:
case 398:
case 1503:
case 1576:
case 2001:
case 2505:
case 3636:
case 3928:
case 2154:
case 2346:
case 4061:
case 342:
case 2979:
case 2856:
case 1884:
case 1205:
case 2869:
case 3776:
case 804:
case 1351:
case 2100:
case 629:
case 634:
case 4053:
case 2007:
case 2988:
case 1363:
case 3240:
case 1113:
case 97:
case 287:
case 712:
case 2325:
case 3407:
case 3068:
case 248:
case 289:
case 894:
case 225:
case 1847:
case 3613:
case 3028:
case 155:
case 3811:
case 2740:
case 627:
case 490:
case 716:
case 2626:
case 2365:
case 2938:
case 292:
case 3889:
case 2976:
case 2314:
case 1507:
case 571:
case 1142:
case 2299:
case 3779:
case 23:
case 3268:
case 1910:
case 2859:
case 3147:
case 3502:
case 130:
case 665:
case 328:
case 609:
case 2207:
case 3689:
case 2124:
case 3707:
case 278:
case 345:
case 2826:
case 323:
case 1321:
case 1579:
case 3611:
case 2768:
case 1647:
case 1702:
case 3813:
case 3799:
case 3958:
case 2629:
case 699:
case 715:
case 3112:
case 2201:
case 3886:
case 3141:
case 3403:
case 3476:
case 1117:
case 837:
case 560:
case 1367:
case 1588:
case 1010:
case 1634:
case 3594:
case 682:
case 226:
case 1501:
case 3058:
case 152:
case 3322:
case 376:
case 1005:
case 839:
case 2096:
case 3574:
case 45:
case 3134:
case 420:
case 3788:
case 222:
case 1353:
case 2238:
case 1794:
case 3496:
case 2409:
case 614:
case 1904:
case 1948:
case 593:
case 1163:
case 957:
case 542:
case 144:
case 2616:
case 3821:
case 3018:
case 3009:
case 1652:
case 2497:
case 1670:
case 3530:
case 1050:
case 918:
case 3663:
case 2887:
case 4017:
case 1780:
case 711:
case 3971:
case 3077:
case 3853:
case 3135:
case 1992:
case 2491:
case 2831:
case 201:
case 488:
case 3293:
case 1795:
case 764:
case 341:
case 1822:
case 661:
case 72:
case 508:
case 1635:
case 3977:
case 3595:
case 2683:
case 575:
case 2471:
case 2520:
case 1972:
case 4011:
case 2146:
case 2808:
case 4042:
case 2819:
case 4089:
case 1950:
case 3273:
case 3206:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1749866401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,];
var gg_b = "1749866401/";

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
