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
case 3180:
case 2542:
case 1810:
case 1350:
case 2593:
case 2223:
case 1758:
case 2525:
case 1659:
case 3978:
case 3250:
case 2485:
case 2887:
case 2101:
case 2111:
case 2295:
case 755:
case 974:
case 228:
case 700:
case 701:
case 1069:
case 249:
case 3339:
case 4040:
case 2957:
case 521:
case 3630:
case 215:
case 2771:
case 289:
case 792:
case 1973:
case 603:
case 2955:
case 2328:
case 2792:
case 4:
case 841:
case 1986:
case 880:
case 881:
case 432:
case 3012:
case 835:
case 314:
case 1324:
case 3216:
case 3206:
case 959:
case 1456:
case 2559:
case 922:
case 1196:
case 68:
case 1306:
case 1316:
case 408:
case 3670:
case 1693:
case 1279:
case 1084:
case 3621:
case 1642:
case 97:
case 1933:
case 1627:
case 3791:
case 1723:
case 251:
case 1797:
case 467:
case 387:
case 30:
case 3080:
case 1674:
case 668:
case 266:
case 1578:
case 2011:
case 347:
case 2188:
case 2344:
case 2403:
case 2413:
case 2638:
case 2645:
case 1377:
case 710:
case 2551:
case 3275:
case 2813:
case 2803:
case 2647:
case 205:
case 1220:
case 3629:
case 2534:
case 613:
case 1634:
case 1522:
case 3586:
case 1994:
case 1547:
case 2690:
case 499:
case 1482:
case 1463:
case 981:
case 980:
case 1545:
case 1538:
case 2119:
case 671:
case 670:
case 3392:
case 2399:
case 343:
case 859:
case 3868:
case 3235:
case 3331:
case 3248:
case 3772:
case 1335:
case 2779:
case 3468:
case 2574:
case 3237:
case 3814:
case 3804:
case 160:
case 2855:
case 2305:
case 2211:
case 2201:
case 1380:
case 1873:
case 3890:
case 372:
case 263:
case 2197:
case 2857:
case 1473:
case 3280:
case 2987:
case 2668:
case 3783:
case 1020:
case 3878:
case 1071:
case 2604:
case 1900:
case 616:
case 2564:
case 3478:
case 1833:
case 1664:
case 451:
case 776:
case 1719:
case 466:
case 1433:
case 4011:
case 1608:
case 1618:
case 3776:
case 134:
case 838:
case 3582:
case 1526:
case 2140:
case 3265:
case 1031:
case 3845:
case 1296:
case 1441:
case 890:
case 153:
case 912:
case 1365:
case 1261:
case 1054:
case 3438:
case 3267:
case 3613:
case 3847:
case 405:
case 802:
case 3396:
case 1841:
case 2336:
case 3050:
case 3707:
case 3717:
case 1701:
case 4009:
case 4019:
case 232:
case 2097:
case 3715:
case 2898:
case 2023:
case 3177:
case 2546:
case 2362:
case 3369:
case 1171:
case 2421:
case 2470:
case 592:
case 1449:
case 3660:
case 3175:
case 1269:
case 606:
case 208:
case 721:
case 397:
case 2870:
case 3510:
case 2383:
case 2821:
case 3500:
case 1849:
case 3212:
case 3202:
case 3914:
case 3685:
case 1852:
case 1143:
case 1192:
case 1681:
case 4088:
case 3926:
case 449:
case 627:
case 2040:
case 1284:
case 1079:
case 415:
case 812:
case 3148:
case 369:
case 3135:
case 1154:
case 1963:
case 2897:
case 2346:
case 2157:
case 2381:
case 1200:
case 3619:
case 3609:
case 3718:
case 2287:
case 712:
case 1173:
case 3300:
case 295:
case 2070:
case 535:
case 2021:
case 624:
case 4060:
case 1439:
case 3980:
case 541:
case 540:
case 1713:
case 1703:
case 2901:
case 2911:
case 229:
case 248:
case 646:
case 3178:
case 4087:
case 3967:
case 3688:
case 4085:
case 1133:
case 3424:
case 1636:
case 2782:
case 3789:
case 316:
case 1094:
case 1683:
case 982:
case 3806:
case 1141:
case 672:
case 409:
case 3816:
case 942:
case 394:
case 1502:
case 3145:
case 2260:
case 62:
case 3406:
case 2700:
case 791:
case 2308:
case 2057:
case 264:
case 57:
case 1785:
case 3090:
case 559:
case 693:
case 702:
case 2055:
case 1787:
case 3875:
case 2170:
case 2121:
case 1149:
case 15:
case 2507:
case 1820:
case 3078:
case 2988:
case 2203:
case 2213:
case 2667:
case 3561:
case 1152:
case 3601:
case 3611:
case 3226:
case 26:
case 574:
case 2680:
case 498:
case 1282:
case 1615:
case 920:
case 921:
case 2130:
case 365:
case 431:
case 430:
case 3022:
case 2029:
case 1041:
case 419:
case 1194:
case 3268:
case 1431:
case 1854:
case 1314:
case 2756:
case 2919:
case 3912:
case 2909:
case 3435:
case 858:
case 3204:
case 3214:
case 1368:
case 1454:
case 3038:
case 3480:
case 1273:
case 722:
case 2255:
case 3520:
case 759:
case 1577:
case 38:
case 46:
case 696:
case 2553:
case 3373:
case 2411:
case 2257:
case 2401:
case 2334:
case 1575:
case 3950:
case 3278:
case 4029:
case 231:
case 2648:
case 2995:
case 538:
case 1378:
case 3727:
case 3793:
case 2997:
case 1721:
case 614:
case 1644:
case 1537:
case 3026:
case 839:
case 1979:
case 2940:
case 1233:
case 3554:
case 2374:
case 3906:
case 2752:
case 1535:
case 303:
case 1063:
case 1548:
case 3333:
case 992:
case 4055:
case 2675:
case 61:
case 1322:
case 3341:
case 3467:
case 3865:
case 3238:
case 3014:
case 1496:
case 1241:
case 2677:
case 3247:
case 955:
case 3867:
case 2599:
case 3068:
case 3543:
case 3539:
case 2532:
case 2624:
case 2888:
case 3734:
case 1920:
case 1757:
case 3751:
case 317:
case 1000:
case 3975:
case 1010:
case 2528:
case 1550:
case 973:
case 2342:
case 3349:
case 2327:
case 740:
case 4030:
case 683:
case 2616:
case 3640:
case 604:
case 2325:
case 735:
case 780:
case 371:
case 1869:
case 3697:
case 911:
case 3937:
case 3623:
case 800:
case 2819:
case 2809:
case 1182:
case 3695:
case 1954:
case 1666:
case 3412:
case 2409:
case 3402:
case 495:
case 3394:
case 4070:
case 4021:
case 687:
case 3104:
case 60:
case 368:
case 488:
case 1056:
case 1484:
case 452:
case 1294:
case 3168:
case 1992:
case 2786:
case 448:
case 1729:
case 2324:
case 526:
case 997:
case 1019:
case 1009:
case 1743:
case 1929:
case 544:
case 1792:
case 723:
case 2941:
case 3649:
case 1240:
case 2279:
case 2306:
case 82:
case 2856:
case 2196:
case 3735:
case 1372:
case 1559:
case 1754:
case 475:
case 2456:
case 765:
case 3748:
case 1460:
case 969:
case 3323:
case 3881:
case 3117:
case 1485:
case 993:
case 1111:
case 3846:
case 1887:
case 1525:
case 1297:
case 3481:
case 2758:
case 1487:
case 58:
case 3446:
case 3291:
case 3395:
case 1223:
case 1885:
case 2800:
case 390:
case 3521:
case 391:
case 507:
case 1593:
case 2350:
case 3036:
case 1328:
case 1955:
case 2973:
case 189:
case 3777:
case 846:
case 1771:
case 3232:
case 3228:
case 1332:
case 3598:
case 1399:
case 716:
case 2538:
case 1109:
case 2545:
case 2651:
case 3489:
case 2292:
case 1690:
case 3529:
case 513:
case 2634:
case 2348:
case 457:
case 260:
case 2096:
case 642:
case 261:
case 1574:
case 2740:
case 2184:
case 794:
case 2231:
case 4020:
case 2952:
case 3716:
case 972:
case 2337:
case 869:
case 1344:
case 4043:
case 893:
case 434:
case 2795:
case 3007:
case 1188:
case 3358:
case 3925:
case 1011:
case 3818:
case 3244:
case 166:
case 3136:
case 1921:
case 2797:
case 3993:
case 1970:
case 3005:
case 3408:
case 3418:
case 3927:
case 3633:
case 3864:
case 2723:
case 1534:
case 3641:
case 105:
case 2220:
case 1647:
case 3686:
case 2271:
case 946:
case 1803:
case 3183:
case 79:
case 3162:
case 2377:
case 1638:
case 571:
case 570:
case 1998:
case 2092:
case 713:
case 2043:
case 2568:
case 234:
case 2618:
case 3712:
case 2719:
case 3702:
case 610:
case 2956:
case 611:
case 2504:
case 2514:
case 2664:
case 2841:
case 1829:
case 2365:
case 987:
case 2441:
case 1429:
case 478:
case 2486:
case 2179:
case 2031:
case 1784:
case 90:
case 677:
case 2526:
case 1140:
case 1857:
case 717:
case 1307:
case 3434:
case 3851:
case 1197:
case 3205:
case 3311:
case 3215:
case 163:
case 2380:
case 3503:
case 3513:
case 199:
case 1305:
case 1457:
case 3217:
case 3451:
case 3834:
case 3663:
case 1564:
case 904:
case 771:
case 257:
case 460:
case 1604:
case 1614:
case 456:
case 3128:
case 1518:
case 1508:
case 2020:
case 2139:
case 340:
case 673:
case 4061:
case 983:
case 3981:
case 744:
case 2646:
case 2143:
case 2852:
case 2302:
case 784:
case 3560:
case 374:
case 1376:
case 3600:
case 1219:
case 1209:
case 600:
case 655:
case 2963:
case 2154:
case 847:
case 3767:
case 565:
case 2131:
case 3072:
case 3765:
case 91:
case 2494:
case 4069:
case 1796:
case 3989:
case 1430:
case 1898:
case 707:
case 3388:
case 996:
case 1158:
case 37:
case 3780:
case 1498:
case 2701:
case 1095:
case 1336:
case 74:
case 3964:
case 2849:
case 3842:
case 804:
case 3028:
case 1821:
case 4084:
case 914:
case 108:
case 3918:
case 3908:
case 3427:
case 3283:
case 2449:
case 1421:
case 1470:
case 2120:
case 275:
case 1546:
case 1362:
case 1581:
case 4010:
case 743:
case 2996:
case 4000:
case 524:
case 681:
case 1782:
case 3174:
case 704:
case 586:
case 640:
case 373:
case 1260:
case 917:
case 88:
case 3509:
case 3519:
case 2502:
case 1840:
case 2141:
case 3360:
case 84:
case 1129:
case 3472:
case 2479:
case 2094:
case 3768:
case 2173:
case 1423:
case 1155:
case 3491:
case 3385:
case 3134:
case 2210:
case 2200:
case 1612:
case 3466:
case 1157:
case 968:
case 1285:
case 787:
case 3151:
case 3387:
case 1495:
case 377:
case 1346:
case 148:
case 129:
case 1901:
case 844:
case 3917:
case 3907:
case 339:
case 3432:
case 188:
case 4056:
case 826:
case 310:
case 3027:
case 3093:
case 3915:
case 1021:
case 3828:
case 2984:
case 714:
case 2605:
case 2565:
case 233:
case 3499:
case 16:
case 2443:
case 2607:
case 2152:
case 3159:
case 2454:
case 2831:
case 2368:
case 1919:
case 2760:
case 907:
case 254:
case 2854:
case 569:
case 593:
case 622:
case 2041:
case 1130:
case 3208:
case 3218:
case 1364:
case 1458:
case 4063:
case 3034:
case 436:
case 3444:
case 164:
case 1057:
case 3264:
case 1308:
case 4082:
case 3844:
case 3453:
case 3125:
case 903:
case 3661:
case 1988:
case 1203:
case 813:
case 392:
case 944:
case 2871:
case 1507:
case 2149:
case 2580:
case 25:
case 3127:
case 3193:
case 674:
case 926:
case 984:
case 3936:
case 2420:
case 597:
case 1505:
case 301:
case 3696:
case 300:
case 437:
case 2063:
case 1752:
case 2535:
case 638:
case 4073:
case 1940:
case 2233:
case 3972:
case 514:
case 89:
case 3274:
case 2861:
case 769:
case 2730:
case 3620:
case 2241:
case 602:
case 793:
case 45:
case 691:
case 2347:
case 2322:
case 3928:
case 3407:
case 3355:
case 1401:
case 1411:
case 2798:
case 51:
case 433:
case 2577:
case 3817:
case 3008:
case 1187:
case 3146:
case 1801:
case 2699:
case 2273:
case 2939:
case 2770:
case 906:
case 1749:
case 1923:
case 3991:
case 816:
case 320:
case 1013:
case 923:
case 1635:
case 119:
case 4041:
case 1648:
case 4086:
case 131:
case 3259:
case 746:
case 1419:
case 2666:
case 3876:
case 2954:
case 786:
case 1572:
case 1359:
case 1809:
case 543:
case 2691:
case 724:
case 1230:
case 1786:
case 3747:
case 3639:
case 3722:
case 612:
case 2294:
case 2484:
case 2056:
case 1060:
case 2628:
case 3738:
case 72:
case 342:
case 3836:
case 3164:
case 3953:
case 3790:
case 1773:
case 2971:
case 382:
case 462:
case 1532:
case 1087:
case 3108:
case 3046:
case 2869:
case 3862:
case 3597:
case 1270:
case 1958:
case 1325:
case 1221:
case 3242:
case 2249:
case 3483:
case 3227:
case 1606:
case 2469:
case 3778:
case 1342:
case 4094:
case 3321:
case 660:
case 661:
case 2836:
case 3000:
case 1975:
case 2164:
case 2953:
case 117:
case 566:
case 1751:
case 799:
case 2436:
case 473:
case 282:
case 3920:
case 3971:
case 4059:
case 2046:
case 2081:
case 2523:
case 3869:
case 2944:
case 718:
case 2597:
case 1640:
case 2227:
case 3672:
case 2293:
case 2778:
case 2370:
case 1948:
case 1402:
case 1412:
case 113:
case 3506:
case 3954:
case 1802:
case 1579:
case 2189:
case 1126:
case 477:
case 3931:
case 1697:
case 2999:
case 3992:
case 3524:
case 2639:
case 2722:
case 3729:
case 4025:
case 995:
case 1168:
case 3294:
case 168:
case 439:
case 2745:
case 3628:
case 3884:
case 1394:
case 4027:
case 1104:
case 4042:
case 2064:
case 2928:
case 2417:
case 4074:
case 732:
case 3100:
case 3110:
case 2008:
case 2018:
case 2146:
case 2234:
case 2807:
case 2357:
case 2405:
case 7:
case 14:
case 2932:
case 3939:
case 1290:
case 3273:
case 2692:
case 1727:
case 96:
case 1742:
case 549:
case 3770:
case 3378:
case 2654:
case 1950:
case 2966:
case 4034:
case 3063:
case 1906:
case 829:
case 1554:
case 848:
case 336:
case 1759:
case 126:
case 2274:
case 2089:
case 3537:
case 3861:
case 3241:
case 3345:
case 2671:
case 1247:
case 2620:
case 3461:
case 3322:
case 401:
case 1245:
case 1341:
case 5:
case 1781:
case 2034:
case 255:
case 2208:
case 2218:
case 2983:
case 1090:
case 2051:
case 2264:
case 3969:
case 2453:
case 2125:
case 2661:
case 1877:
case 715:
case 1475:
case 789:
case 3580:
case 35:
case 3149:
case 1875:
case 2696:
case 1477:
case 2936:
case 749:
case 3420:
case 3471:
case 3033:
case 1363:
case 4064:
case 3605:
case 3984:
case 1596:
case 2289:
case 3443:
case 333:
case 1611:
case 930:
case 931:
case 3263:
case 919:
case 123:
case 2159:
case 1561:
case 809:
case 2899:
case 1837:
case 1204:
case 998:
case 1435:
case 3368:
case 354:
case 421:
case 420:
case 3760:
case 1835:
case 3194:
case 1437:
case 2976:
case 3314:
case 3431:
case 1047:
case 3086:
case 1848:
case 1190:
case 1300:
case 1310:
case 2385:
case 653:
case 2134:
case 3676:
case 2491:
case 563:
case 1609:
case 3210:
case 3200:
case 2387:
case 1569:
case 750:
case 2891:
case 705:
case 2588:
case 2917:
case 2907:
case 634:
case 2025:
case 525:
case 211:
case 2432:
case 2684:
case 2828:
case 2093:
case 2915:
case 2042:
case 3049:
case 1789:
case 2174:
case 442:
case 567:
case 116:
case 3133:
case 362:
case 3052:
case 819:
case 1967:
case 909:
case 3256:
case 898:
case 2704:
case 2714:
case 1138:
case 3879:
case 3512:
case 3502:
case 2360:
case 1356:
case 3094:
case 2472:
case 3479:
case 1705:
case 798:
case 654:
case 2780:
case 2236:
case 1707:
case 1050:
case 222:
case 1510:
case 2893:
case 2827:
case 3269:
case 1175:
case 1660:
case 2656:
case 2585:
case 2493:
case 2825:
case 2442:
case 3449:
case 2918:
case 1177:
case 785:
case 3039:
case 3171:
case 3120:
case 3646:
case 915:
case 1024:
case 805:
case 402:
case 3852:
case 3192:
case 274:
case 1914:
case 949:
case 2459:
case 3452:
case 4036:
case 1212:
case 2600:
case 1135:
case 3894:
case 3963:
case 3154:
case 1006:
case 169:
case 1148:
case 3494:
case 2072:
case 3131:
case 850:
case 3079:
case 3284:
case 1926:
case 2989:
case 3982:
case 2044:
case 2682:
case 2311:
case 2205:
case 2215:
case 2434:
case 2851:
case 2191:
case 3873:
case 3380:
case 2503:
case 1150:
case 2207:
case 2834:
case 3788:
case 595:
case 1762:
case 280:
case 357:
case 235:
case 1478:
case 2128:
case 2053:
case 1077:
case 241:
case 240:
case 2132:
case 3071:
case 3139:
case 1878:
case 552:
case 709:
case 3020:
case 1783:
case 548:
case 2946:
case 815:
case 3568:
case 2474:
case 889:
case 3092:
case 2099:
case 146:
case 3618:
case 3608:
case 905:
case 4007:
case 2874:
case 828:
case 3956:
case 186:
case 3709:
case 2712:
case 2702:
case 849:
case 3664:
case 4005:
case 1445:
case 1396:
case 3886:
case 1847:
case 1603:
case 1267:
case 1438:
case 3054:
case 1447:
case 3486:
case 1422:
case 950:
case 1037:
case 3179:
case 966:
case 2172:
case 3031:
case 1838:
case 1265:
case 1361:
case 212:
case 2818:
case 2017:
case 3795:
case 3674:
case 2136:
case 10:
case 2244:
case 3949:
case 2927:
case 2993:
case 187:
case 2005:
case 2555:
case 3375:
case 3220:
case 729:
case 1277:
case 748:
case 2183:
case 1573:
case 509:
case 3590:
case 378:
case 2557:
case 1275:
case 3169:
case 2162:
case 2253:
case 1112:
case 1343:
case 3882:
case 1392:
case 3651:
case 3463:
case 3545:
case 1657:
case 104:
case 2673:
case 3292:
case 2299:
case 1426:
case 183:
case 3243:
case 3482:
case 2489:
case 1541:
case 3994:
case 1586:
case 2529:
case 1655:
case 360:
case 480:
case 481:
case 832:
case 1533:
case 3184:
case 3335:
case 356:
case 1804:
case 1814:
case 441:
case 2716:
case 2706:
case 440:
case 3952:
case 2959:
case 1067:
case 3337:
case 1331:
case 3061:
case 1404:
case 2397:
case 2323:
case 2117:
case 1250:
case 202:
case 1978:
case 3400:
case 2291:
case 2105:
case 2481:
case 764:
case 1549:
case 1180:
case 2570:
case 3350:
case 290:
case 291:
case 2083:
case 2694:
case 1630:
case 2777:
case 636:
case 1753:
case 867:
case 2775:
case 1339:
case 2062:
case 908:
case 3324:
case 4091:
case 818:
case 459:
case 2076:
case 2530:
case 4066:
case 1947:
case 3986:
case 825:
case 1922:
case 3084:
case 2272:
case 4028:
case 3279:
case 3693:
case 1670:
case 2737:
case 3933:
case 2649:
case 3642:
case 3856:
case 2340:
case 1167:
case 9:
case 1379:
case 1552:
case 2748:
case 1216:
case 863:
case 3733:
case 1476:
case 2697:
case 1189:
case 3819:
case 2802:
case 2812:
case 3359:
case 734:
case 1259:
case 879:
case 2948:
case 2412:
case 3409:
case 2402:
case 3419:
case 2104:
case 561:
case 556:
case 2168:
case 837:
case 3230:
case 1081:
case 3888:
case 1046:
case 1108:
case 3087:
case 2539:
case 3773:
case 1790:
case 2977:
case 182:
case 73:
case 2751:
case 1953:
case 158:
case 1836:
case 142:
case 3566:
case 3113:
case 3103:
case 3342:
case 1225:
case 1321:
case 1462:
case 309:
case 3616:
case 3325:
case 3958:
case 1679:
case 3270:
case 2640:
case 1483:
case 1242:
case 1597:
case 270:
case 1862:
case 1944:
case 833:
case 757:
case 1089:
case 1274:
case 649:
case 2026:
case 226:
case 284:
case 427:
case 1972:
case 2658:
case 203:
case 3374:
case 4090:
case 244:
case 2333:
case 3675:
case 1329:
case 2386:
case 2004:
case 2014:
case 2222:
case 937:
case 4078:
case 3229:
case 1620:
case 3677:
case 2867:
case 3599:
case 2465:
case 2290:
case 1643:
case 1932:
case 1181:
case 1807:
case 1817:
case 3801:
case 3811:
case 3255:
case 3351:
case 398:
case 1805:
case 1417:
case 1251:
case 1407:
case 1928:
case 3334:
case 3411:
case 3401:
case 775:
case 2278:
case 330:
case 385:
case 2950:
case 3995:
case 3003:
case 3013:
case 3635:
case 2725:
case 121:
case 1558:
case 4038:
case 3544:
case 2793:
case 3637:
case 1991:
case 3923:
case 3749:
case 2561:
case 2601:
case 2611:
case 206:
case 608:
case 1074:
case 2226:
case 48:
case 407:
case 2363:
case 2022:
case 3130:
case 2047:
case 1976:
case 2835:
case 2268:
case 2437:
case 2448:
case 3919:
case 2902:
case 3909:
case 2912:
case 3756:
case 2045:
case 2214:
case 2837:
case 2435:
case 1962:
case 3710:
case 3700:
case 3057:
case 364:
case 227:
case 3318:
case 1444:
case 1218:
case 1208:
case 2746:
case 444:
case 155:
case 3055:
case 1983:
case 1034:
case 3458:
case 3364:
case 2477:
case 4014:
case 3665:
case 1193:
case 2078:
case 192:
case 1501:
case 1511:
case 2877:
case 3517:
case 1661:
case 1125:
case 575:
case 3213:
case 3667:
case 2688:
case 2824:
case 2967:
case 1059:
case 417:
case 2965:
case 1174:
case 1726:
case 1768:
case 3440:
case 3129:
case 2122:
case 3030:
case 1360:
case 1872:
case 1519:
case 294:
case 3840:
case 756:
case 471:
case 2416:
case 2406:
case 470:
case 3260:
case 761:
case 760:
case 2145:
case 3381:
case 3823:
case 3346:
case 177:
case 3495:
case 1387:
case 3562:
case 1151:
case 2619:
case 3612:
case 2609:
case 3287:
case 1491:
case 1134:
case 3497:
case 1385:
case 1281:
case 53:
case 395:
case 2300:
case 1027:
case 1042:
case 3021:
case 1905:
case 3070:
case 29:
case 1432:
case 139:
case 110:
case 778:
case 3911:
case 1907:
case 1917:
case 1428:
case 348:
case 836:
case 3219:
case 2202:
case 1600:
case 1459:
case 1560:
case 2685:
case 2914:
case 3376:
case 2556:
case 736:
case 1319:
case 1859:
case 2687:
case 1072:
case 554:
case 2137:
case 3040:
case 2148:
case 269:
case 293:
case 1767:
case 2384:
case 2050:
case 122:
case 3498:
case 2707:
case 159:
case 3288:
case 3903:
case 1236:
case 1780:
case 4012:
case 4002:
case 860:
case 1388:
case 3023:
case 856:
case 2705:
case 2715:
case 3158:
case 3362:
case 2369:
case 3546:
case 2177:
case 1825:
case 1918:
case 3470:
case 579:
case 3421:
case 308:
case 1585:
case 66:
case 2660:
case 1827:
case 1964:
case 2500:
case 1028:
case 1893:
case 978:
case 224:
case 1702:
case 1712:
case 3960:
case 688:
case 2124:
case 652:
case 2776:
case 447:
case 648:
case 246:
case 629:
case 2361:
case 3784:
case 1172:
case 3140:
case 2582:
case 3589:
case 2447:
case 2422:
case 3429:
case 2267:
case 2613:
case 2106:
case 695:
case 2396:
case 2445:
case 2847:
case 3211:
case 3315:
case 3201:
case 1451:
case 3195:
case 272:
case 2150:
case 483:
case 399:
case 1513:
case 404:
case 3857:
case 961:
case 960:
case 1301:
case 1215:
case 1311:
case 1205:
case 3197:
case 1682:
case 22:
case 2490:
case 1044:
case 956:
case 3668:
case 2783:
case 3987:
case 1981:
case 2878:
case 3518:
case 2077:
case 3604:
case 3985:
case 1128:
case 318:
case 3564:
case 2075:
case 2586:
case 1529:
case 1724:
case 875:
case 472:
case 1489:
case 3690:
case 762:
case 1299:
case 204:
case 2657:
case 1889:
case 42:
case 2826:
case 243:
case 3399:
case 3119:
case 2102:
case 2112:
case 2868:
case 2067:
case 3678:
case 1706:
case 1716:
case 2814:
case 2354:
case 3574:
case 2065:
case 3970:
case 3258:
case 3921:
case 350:
case 1864:
case 2791:
case 1408:
case 366:
case 3188:
case 247:
case 1818:
case 2766:
case 112:
case 3638:
case 4037:
case 2371:
case 3551:
case 2320:
case 1557:
case 3803:
case 3353:
case 4035:
case 2277:
case 3739:
case 1555:
case 2629:
case 3647:
case 2594:
case 2947:
case 4050:
case 619:
case 3743:
case 2922:
case 685:
case 3792:
case 2799:
case 631:
case 630:
case 536:
case 975:
case 2945:
case 3009:
case 2012:
case 857:
case 645:
case 3559:
case 3372:
case 1735:
case 2167:
case 3754:
case 698:
case 754:
case 3860:
case 296:
case 1649:
case 2621:
case 2670:
case 1570:
case 2744:
case 190:
case 3366:
case 2180:
case 1481:
case 1395:
case 3487:
case 1266:
case 102:
case 1652:
case 3391:
case 3295:
case 3101:
case 853:
case 3111:
case 1397:
case 3485:
case 2339:
case 3332:
case 1598:
case 328:
case 1228:
case 1777:
case 4016:
case 4006:
case 3771:
case 1232:
case 493:
case 2630:
case 779:
case 3955:
case 3328:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1754863202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,];
var gg_b = "1754863202/";

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
