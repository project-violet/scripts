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
case 3401:
case 836:
case 3074:
case 2157:
case 2837:
case 1637:
case 1813:
case 619:
case 3953:
case 2751:
case 1058:
case 1928:
case 1365:
case 2269:
case 3898:
case 3670:
case 1179:
case 3071:
case 442:
case 1936:
case 3519:
case 2754:
case 1168:
case 2755:
case 1504:
case 1576:
case 1290:
case 1419:
case 2716:
case 3202:
case 3154:
case 2077:
case 3466:
case 1418:
case 2643:
case 2279:
case 927:
case 3061:
case 3155:
case 1843:
case 3835:
case 3358:
case 2900:
case 3899:
case 2268:
case 1566:
case 107:
case 1702:
case 3518:
case 1323:
case 2312:
case 1449:
case 837:
case 1929:
case 3146:
case 3065:
case 3151:
case 140:
case 3831:
case 3549:
case 491:
case 633:
case 4069:
case 3529:
case 190:
case 2671:
case 2791:
case 1098:
case 386:
case 3331:
case 1429:
case 565:
case 1949:
case 2197:
case 683:
case 3126:
case 2400:
case 1875:
case 2739:
case 1250:
case 3138:
case 1343:
case 303:
case 2675:
case 2795:
case 1918:
case 34:
case 3013:
case 2623:
case 2812:
case 1823:
case 3334:
case 1865:
case 1919:
case 2665:
case 84:
case 2664:
case 1864:
case 3976:
case 405:
case 3904:
case 492:
case 3195:
case 444:
case 3139:
case 803:
case 3905:
case 1031:
case 1861:
case 3043:
case 229:
case 2661:
case 2726:
case 3797:
case 1948:
case 640:
case 416:
case 2337:
case 2588:
case 3382:
case 1297:
case 2322:
case 387:
case 3191:
case 1320:
case 547:
case 1062:
case 716:
case 2926:
case 3986:
case 1748:
case 3997:
case 2041:
case 1201:
case 820:
case 511:
case 3219:
case 500:
case 234:
case 1827:
case 3776:
case 4089:
case 472:
case 2627:
case 1276:
case 1590:
case 2578:
case 1152:
case 1204:
case 792:
case 2045:
case 62:
case 2166:
case 1347:
case 1719:
case 2044:
case 282:
case 2309:
case 1205:
case 162:
case 3766:
case 957:
case 2579:
case 2416:
case 1810:
case 888:
case 3950:
case 58:
case 3020:
case 2011:
case 3621:
case 2995:
case 3218:
case 418:
case 2568:
case 1266:
case 2176:
case 2104:
case 3624:
case 741:
case 1749:
case 1293:
case 460:
case 1884:
case 4092:
case 3625:
case 320:
case 546:
case 2015:
case 231:
case 170:
case 717:
case 255:
case 2096:
case 1817:
case 3957:
case 1384:
case 2833:
case 2617:
case 928:
case 2491:
case 2289:
case 281:
case 1188:
case 108:
case 3645:
case 1550:
case 709:
case 1192:
case 2495:
case 12:
case 53:
case 1310:
case 1381:
case 2439:
case 1608:
case 37:
case 90:
case 3450:
case 512:
case 2916:
case 3862:
case 3040:
case 3656:
case 2955:
case 87:
case 3615:
case 21:
case 3614:
case 284:
case 3084:
case 1327:
case 2024:
case 2954:
case 2438:
case 2647:
case 980:
case 2809:
case 2946:
case 3010:
case 2021:
case 1728:
case 3680:
case 3486:
case 2426:
case 1340:
case 1586:
case 671:
case 3000:
case 3601:
case 3388:
case 2125:
case 1942:
case 1648:
case 2740:
case 2124:
case 3184:
case 3763:
case 3604:
case 3605:
case 981:
case 2965:
case 2819:
case 3110:
case 1619:
case 3181:
case 1089:
case 3392:
case 1618:
case 3721:
case 2781:
case 2534:
case 118:
case 959:
case 3983:
case 3852:
case 2187:
case 2975:
case 2785:
case 595:
case 91:
case 502:
case 4072:
case 2163:
case 2607:
case 3724:
case 1807:
case 2531:
case 3967:
case 3693:
case 1224:
case 1092:
case 2329:
case 160:
case 2971:
case 280:
case 2005:
case 1244:
case 408:
case 461:
case 2717:
case 2349:
case 2076:
case 1733:
case 1307:
case 2004:
case 3745:
case 3233:
case 982:
case 2111:
case 3120:
case 230:
case 3512:
case 1583:
case 1800:
case 2475:
case 2558:
case 2406:
case 3352:
case 3756:
case 2114:
case 2115:
case 2943:
case 706:
case 174:
case 2464:
case 2465:
case 86:
case 3209:
case 931:
case 1709:
case 2836:
case 618:
case 955:
case 2559:
case 1636:
case 2093:
case 715:
case 1052:
case 2913:
case 1922:
case 3477:
case 2720:
case 1628:
case 2461:
case 3888:
case 821:
case 3542:
case 2348:
case 3117:
case 1326:
case 3237:
case 415:
case 641:
case 4058:
case 3095:
case 3039:
case 1131:
case 579:
case 813:
case 3911:
case 1846:
case 339:
case 2651:
case 2050:
case 2646:
case 1737:
case 3463:
case 1303:
case 483:
case 2713:
case 1722:
case 1134:
case 2432:
case 258:
case 352:
case 3091:
case 1855:
case 3915:
case 1270:
case 1338:
case 2160:
case 142:
case 1587:
case 2655:
case 2654:
case 2235:
case 2481:
case 3421:
case 2743:
case 929:
case 1816:
case 2086:
case 3003:
case 1602:
case 1521:
case 1908:
case 1198:
case 191:
case 1573:
case 3944:
case 3425:
case 708:
case 1182:
case 2484:
case 2917:
case 4059:
case 3473:
case 1524:
case 2691:
case 226:
case 335:
case 2090:
case 889:
case 117:
case 770:
case 3767:
case 1433:
case 2417:
case 351:
case 3445:
case 3924:
case 2177:
case 3444:
case 575:
case 3161:
case 1839:
case 2695:
case 2775:
case 963:
case 1541:
case 1895:
case 694:
case 854:
case 1556:
case 3368:
case 2639:
case 1894:
case 1316:
case 642:
case 2706:
case 1283:
case 2694:
case 2302:
case 2723:
case 3783:
case 2981:
case 45:
case 3051:
case 3509:
case 762:
case 4031:
case 609:
case 2764:
case 144:
case 192:
case 2765:
case 1158:
case 3230:
case 105:
case 3369:
case 1730:
case 1409:
case 1838:
case 2447:
case 3106:
case 1515:
case 3996:
case 1354:
case 2932:
case 4035:
case 3777:
case 3697:
case 2940:
case 1826:
case 2626:
case 3016:
case 1068:
case 227:
case 1742:
case 3480:
case 3411:
case 2420:
case 1346:
case 1803:
case 1277:
case 2167:
case 1511:
case 2603:
case 1580:
case 851:
case 3428:
case 2488:
case 3642:
case 1043:
case 3313:
case 3297:
case 3034:
case 1528:
case 3286:
case 2226:
case 890:
case 3035:
case 3553:
case 819:
case 187:
case 1191:
case 1536:
case 3865:
case 454:
case 558:
case 85:
case 69:
case 1904:
case 3031:
case 1195:
case 35:
case 4046:
case 103:
case 1138:
case 3918:
case 14:
case 2295:
case 1858:
case 1399:
case 2239:
case 1750:
case 1335:
case 923:
case 1334:
case 3082:
case 1013:
case 2022:
case 1529:
case 1103:
case 2867:
case 1993:
case 4054:
case 319:
case 3871:
case 948:
case 2291:
case 266:
case 833:
case 186:
case 1126:
case 687:
case 3449:
case 4038:
case 150:
case 3257:
case 2367:
case 413:
case 1146:
case 815:
case 3371:
case 3929:
case 2989:
case 2631:
case 2030:
case 2507:
case 1493:
case 3306:
case 1061:
case 1155:
case 3169:
case 1660:
case 19:
case 3418:
case 3375:
case 2042:
case 1899:
case 307:
case 2635:
case 969:
case 2699:
case 3323:
case 3702:
case 2634:
case 2778:
case 1071:
case 3365:
case 2255:
case 2870:
case 1405:
case 1898:
case 1476:
case 2254:
case 64:
case 4091:
case 603:
case 306:
case 3290:
case 2769:
case 976:
case 1075:
case 2246:
case 383:
case 3361:
case 686:
case 1074:
case 439:
case 1006:
case 3637:
case 1882:
case 1953:
case 4039:
case 2682:
case 3622:
case 2988:
case 3928:
case 315:
case 137:
case 1010:
case 1081:
case 1611:
case 2129:
case 2503:
case 1753:
case 1486:
case 2363:
case 3340:
case 543:
case 93:
case 1615:
case 1085:
case 996:
case 2815:
case 364:
case 2396:
case 2792:
case 4007:
case 82:
case 3847:
case 528:
case 2136:
case 3192:
case 46:
case 32:
case 2979:
case 3381:
case 2321:
case 3310:
case 2968:
case 17:
case 1862:
case 1641:
case 953:
case 1040:
case 2539:
case 2856:
case 2662:
case 2841:
case 1027:
case 2324:
case 3817:
case 3633:
case 1032:
case 580:
case 1229:
case 2844:
case 308:
case 3188:
case 2128:
case 3729:
case 295:
case 2373:
case 785:
case 2591:
case 3749:
case 2148:
case 1625:
case 3557:
case 530:
case 2825:
case 370:
case 900:
case 2009:
case 1673:
case 1249:
case 2345:
case 2752:
case 638:
case 911:
case 1502:
case 1621:
case 2119:
case 3718:
case 3810:
case 3881:
case 1950:
case 2479:
case 1218:
case 3402:
case 1362:
case 2356:
case 2315:
case 1490:
case 2554:
case 1017:
case 2314:
case 2887:
case 3827:
case 1696:
case 1776:
case 201:
case 946:
case 3205:
case 268:
case 1701:
case 210:
case 2551:
case 2546:
case 1248:
case 789:
case 4000:
case 2149:
case 914:
case 3062:
case 3840:
case 1663:
case 3201:
case 98:
case 737:
case 2853:
case 1653:
case 211:
case 2018:
case 3628:
case 2688:
case 247:
case 2220:
case 3211:
case 1542:
case 1530:
case 2049:
case 438:
case 1007:
case 3162:
case 2376:
case 2305:
case 1209:
case 1715:
case 3709:
case 3430:
case 200:
case 3215:
case 2998:
case 2565:
case 3636:
case 3214:
case 1892:
case 124:
case 1147:
case 2935:
case 910:
case 2109:
case 2934:
case 2366:
case 3172:
case 2575:
case 214:
case 3412:
case 2048:
case 16:
case 28:
case 2506:
case 1960:
case 1208:
case 2458:
case 3244:
case 3733:
case 3307:
case 736:
case 2571:
case 1233:
case 1120:
case 246:
case 3567:
case 750:
case 4032:
case 1744:
case 4027:
case 1889:
case 371:
case 1725:
case 581:
case 786:
case 3807:
case 3649:
case 1140:
case 3273:
case 4047:
case 3092:
case 3224:
case 420:
case 2893:
case 2431:
case 1389:
case 360:
case 2285:
case 212:
case 624:
case 1460:
case 3300:
case 2028:
case 3618:
case 872:
case 1721:
case 1666:
case 1983:
case 74:
case 2652:
case 1127:
case 3560:
case 2434:
case 2543:
case 2210:
case 1604:
case 1796:
case 1676:
case 2876:
case 66:
case 1787:
case 2498:
case 818:
case 902:
case 2029:
case 2959:
case 372:
case 2232:
case 2227:
case 2801:
case 1388:
case 1000:
case 1601:
case 253:
case 3437:
case 1763:
case 3648:
case 2482:
case 1184:
case 1977:
case 1686:
case 2897:
case 613:
case 2886:
case 316:
case 1480:
case 3079:
case 1242:
case 1171:
case 563:
case 269:
case 3351:
case 3346:
case 685:
case 2002:
case 3580:
case 4043:
case 3803:
case 2547:
case 344:
case 1509:
case 1378:
case 305:
case 1415:
case 392:
case 298:
case 975:
case 3158:
case 1175:
case 154:
case 3838:
case 3730:
case 3514:
case 2265:
case 3409:
case 3354:
case 1174:
case 1106:
case 2472:
case 3541:
case 2130:
case 1368:
case 3839:
case 3283:
case 44:
case 3316:
case 1456:
case 1783:
case 3712:
case 2206:
case 1441:
case 1508:
case 403:
case 1650:
case 1046:
case 1165:
case 1921:
case 892:
case 652:
case 3891:
case 525:
case 639:
case 1767:
case 3544:
case 3267:
case 2517:
case 1444:
case 1944:
case 3573:
case 185:
case 689:
case 1945:
case 3182:
case 4065:
case 450:
case 113:
case 4064:
case 1038:
case 842:
case 1868:
case 3395:
case 2668:
case 3339:
case 2962:
case 1026:
case 77:
case 654:
case 1941:
case 49:
case 2581:
case 3602:
case 4061:
case 967:
case 2243:
case 2679:
case 3260:
case 2735:
case 738:
case 1878:
case 3338:
case 342:
case 3587:
case 966:
case 2532:
case 1869:
case 1915:
case 3854:
case 394:
case 437:
case 2213:
case 2386:
case 3326:
case 1095:
case 4074:
case 4006:
case 891:
case 1980:
case 223:
case 3722:
case 635:
case 4075:
case 3737:
case 3303:
case 3319:
case 2970:
case 1998:
case 1108:
case 3836:
case 2892:
case 224:
case 3559:
case 3093:
case 2714:
case 3272:
case 1247:
case 920:
case 3465:
case 2209:
case 1220:
case 393:
case 3348:
case 2117:
case 696:
case 856:
case 1561:
case 2653:
case 357:
case 1853:
case 3144:
case 3461:
case 2888:
case 3828:
case 1301:
case 1571:
case 3829:
case 3111:
case 1689:
case 330:
case 893:
case 1931:
case 3471:
case 3349:
case 2467:
case 356:
case 3004:
case 2741:
case 3423:
case 2756:
case 1575:
case 1762:
case 1506:
case 18:
case 1458:
case 3943:
case 3001:
case 1935:
case 1523:
case 2512:
case 3318:
case 2147:
case 7:
case 678:
case 3196:
case 2132:
case 3974:
case 3187:
case 2127:
case 3906:
case 1210:
case 52:
case 13:
case 3781:
case 3534:
case 3818:
case 1958:
case 3599:
case 3923:
case 2983:
case 3535:
case 600:
case 2967:
case 1893:
case 2693:
case 2773:
case 2389:
case 3329:
case 938:
case 1285:
case 843:
case 196:
case 561:
case 3163:
case 3849:
case 647:
case 766:
case 3531:
case 3784:
case 97:
case 30:
case 1482:
case 3740:
case 2977:
case 2184:
case 410:
case 2763:
case 3848:
case 767:
case 646:
case 3173:
case 2000:
case 197:
case 2522:
case 880:
case 2537:
case 1801:
case 343:
case 3328:
case 1959:
case 178:
case 3965:
case 3819:
case 3121:
case 2110:
case 1029:
case 2392:
case 3336:
case 3598:
case 564:
case 401:
case 3732:
case 2604:
case 2796:
case 2676:
case 68:
case 614:
case 2605:
case 2470:
case 1805:
case 254:
case 3447:
case 2987:
case 3927:
case 2996:
case 3057:
case 2123:
case 2509:
case 3183:
case 768:
case 2414:
case 3764:
case 2378:
case 2415:
case 1261:
case 2171:
case 665:
case 3167:
case 710:
case 1002:
case 3603:
case 479:
case 2697:
case 2777:
case 1886:
case 327:
case 3761:
case 2480:
case 3420:
case 1357:
case 3984:
case 3177:
case 2444:
case 1142:
case 827:
case 2161:
case 2055:
case 1517:
case 3691:
case 235:
case 540:
case 623:
case 251:
case 1462:
case 2164:
case 3302:
case 3723:
case 2783:
case 2508:
case 2441:
case 3910:
case 937:
case 3981:
case 1850:
case 2650:
case 1758:
case 2046:
case 3775:
case 3562:
case 3639:
case 1223:
case 3774:
case 3802:
case 55:
case 698:
case 858:
case 4042:
case 1734:
case 1581:
case 1350:
case 2879:
case 1735:
case 3235:
case 2760:
case 3481:
case 3410:
case 2868:
case 3299:
case 2956:
case 3097:
case 3234:
case 3086:
case 2026:
case 3917:
case 2473:
case 1585:
case 1731:
case 1584:
case 873:
case 2038:
case 165:
case 2944:
case 2425:
case 702:
case 2113:
case 1122:
case 3484:
case 677:
case 795:
case 533:
case 3651:
case 3050:
case 2463:
case 3713:
case 1386:
case 3282:
case 1213:
case 676:
case 2222:
case 749:
case 2095:
case 373:
case 1540:
case 2039:
case 903:
case 1532:
case 3298:
case 2869:
case 2143:
case 2915:
case 148:
case 1527:
case 3655:
case 2496:
case 3432:
case 3427:
case 358:
case 2690:
case 2770:
case 3947:
case 2878:
case 1890:
case 2976:
case 2904:
case 2194:
case 3738:
case 1370:
case 2536:
case 1238:
case 6:
case 3588:
case 3703:
case 1226:
case 2382:
case 287:
case 167:
case 2901:
case 1488:
case 3060:
case 329:
case 3842:
case 1203:
case 477:
case 469:
case 286:
case 1489:
case 829:
case 166:
case 796:
case 3907:
case 2126:
case 3186:
case 3589:
case 1658:
case 24:
case 1295:
case 2399:
case 1294:
case 2013:
case 712:
case 2683:
case 1500:
case 1883:
case 3812:
case 1037:
case 3674:
case 73:
case 3739:
case 2138:
case 203:
case 3675:
case 3795:
case 1779:
case 1699:
case 2899:
case 1635:
case 989:
case 1634:
case 2834:
case 3312:
case 3716:
case 2154:
case 78:
case 2466:
case 3643:
case 29:
case 3279:
case 1860:
case 714:
case 2660:
case 236:
case 1507:
case 517:
case 1631:
case 2757:
case 679:
case 250:
case 175:
case 2151:
case 541:
case 1012:
case 3083:
case 2023:
case 2882:
case 516:
case 1246:
case 2548:
case 2401:
case 1251:
case 825:
case 363:
case 2075:
case 666:
case 1377:
case 2006:
case 423:
case 3157:
case 2116:
case 3755:
case 3278:
case 935:
case 1255:
case 3269:
case 2359:
case 2670:
case 1698:
case 448:
case 700:
case 3067:
case 951:
case 1672:
case 3073:
case 4049:
case 2100:
case 3438:
case 238:
case 332:
case 1978:
case 3809:
case 3955:
case 572:
case 1969:
case 1815:
case 2085:
case 748:
case 2236:
case 1538:
case 1387:
case 3292:
case 2084:
case 400:
case 3954:
case 1396:
case 411:
case 3403:
case 1363:
case 604:
case 2228:
case 881:
case 1788:
case 3620:
case 447:
case 2497:
case 2753:
case 2486:
case 381:
case 195:
case 1844:
case 859:
case 1845:
case 3153:
case 1373:
case 3096:
case 446:
case 2957:
case 2032:
case 2027:
case 3087:
case 1325:
case 3491:
case 2229:
case 1968:
case 1662:
case 3916:
case 1841:
case 2040:
case 2656:
case 668:
case 1136:
case 3494:
case 1321:
case 3700:
case 3995:
case 1479:
case 834:
case 1341:
case 1356:
case 4028:
case 3252:
case 3104:
case 2766:
case 1752:
case 3579:
case 43:
case 1821:
case 882:
case 2950:
case 3308:
case 3080:
case 3681:
case 2621:
case 3610:
case 3101:
case 331:
case 1009:
case 1344:
case 3991:
case 1345:
case 1207:
case 355:
case 3684:
case 2624:
case 1148:
case 3707:
case 571:
case 1825:
case 3685:
case 2625:
case 145:
case 2107:
case 3926:
case 3640:
case 3056:
case 497:
case 3041:
case 96:
case 3451:
case 110:
case 831:
case 1380:
case 1008:
case 602:
case 777:
case 855:
case 1546:
case 574:
case 2372:
case 382:
case 1118:
case 101:
case 3455:
case 921:
case 2219:
case 1554:
case 2705:
case 3938:
case 334:
case 3632:
case 1887:
case 2696:
case 1033:
case 2017:
case 1314:
case 3569:
case 478:
case 2687:
case 434:
case 812:
case 1121:
case 2619:
case 2089:
case 961:
case 1819:
case 2296:
case 2287:
case 1336:
case 4044:
case 3876:
case 3805:
case 3498:
case 4045:
case 2930:
case 2648:
case 2422:
case 1124:
case 1173:
case 3801:
case 1328:
case 4056:
case 92:
case 397:
case 4041:
case 3513:
case 4015:
case 4014:
case 1329:
case 897:
case 260:
case 657:
case 3285:
case 1971:
case 396:
case 1784:
case 693:
case 853:
case 1849:
case 1607:
case 2560:
case 1196:
case 4011:
case 3543:
case 2221:
case 33:
case 218:
case 2300:
case 1443:
case 2618:
case 1781:
case 1710:
case 1535:
case 3652:
case 1053:
case 3575:
case 314:
case 628:
case 3762:
case 2412:
case 3048:
case 3506:
case 38:
case 3574:
case 4063:
case 1318:
case 3935:
case 3109:
case 1600:
case 2708:
case 3934:
case 3366:
case 2256:
case 1558:
case 2172:
case 2241:
case 1406:
case 3571:
case 3393:
case 3689:
case 2629:
case 346:
case 811:
case 130:
case 520:
case 2567:
case 962:
case 3019:
case 4087:
case 2244:
case 847:
case 1471:
case 1005:
case 1004:
case 2245:
case 1349:
case 1717:
case 459:
case 347:
case 2280:
case 2211:
case 193:
case 1348:
case 763:
case 1145:
case 1913:
case 157:
case 311:
case 1828:
case 3301:
case 3018:
case 1144:
case 1720:
case 2442:
case 484:
case 4024:
case 970:
case 3564:
case 1747:
case 1319:
case 2215:
case 3998:
case 3565:
case 1559:
case 1093:
case 3049:
case 3304:
case 2162:
case 3376:
case 4073:
case 88:
case 588:
case 3247:
case 1160:
case 242:
case 2587:
case 3532:
case 2855:
case 2270:
case 2854:
case 294:
case 1427:
case 158:
case 732:
case 2134:
case 1432:
case 2909:
case 3890:
case 3798:
case 2199:
case 919:
case 865:
case 1646:
case 2846:
case 1920:
case 626:
case 1713:
case 3782:
case 463:
case 3397:
case 4083:
case 3540:
case 587:
case 2563:
case 627:
case 3585:
case 2525:
case 1917:
case 3857:
case 3731:
case 3584:
case 2391:
case 586:
case 823:
case 781:
case 425:
case 3122:
case 3581:
case 2521:
case 3510:
case 2602:
case 2198:
case 1170:
case 3679:
case 2908:
case 3735:
case 4077:
case 1299:
case 2395:
case 933:
case 3668:
case 3962:
case 1234:
case 1086:
case 2394:
case 1097:
case 1723:
case 2159:
case 915:
case 1981:
case 3275:
case 898:
case 658:
case 2541:
case 2556:
case 1639:
case 983:
case 1695:
case 2283:
case 1706:
case 2894:
case 2316:
case 673:
case 1984:
case 1177:
case 3357:
case 906:
case 1985:
case 376:
case 2545:
case 536:
case 1691:
case 869:
case 2078:
case 1417:
case 2544:
case 3261:
case 2351:
case 1167:
case 3002:
case 1603:
case 2580:
case 2803:
case 429:
case 2277:
case 1940:
case 3886:
case 2068:
case 876:
case 1447:
case 940:
case 1259:
case 2730:
case 2515:
case 1932:
case 3472:
case 244:
case 1183:
case 3112:
case 205:
case 1765:
case 292:
case 1754:
case 2505:
case 941:
case 206:
case 2504:
case 2290:
case 2168:
case 3769:
case 1755:
case 917:
case 3255:
case 3870:
case 3102:
case 2364:
case 3254:
case 2936:
case 3992:
case 2637:
case 3012:
case 1083:
case 2448:
case 2501:
case 2928:
case 1751:
case 757:
case 589:
case 163:
case 3246:
case 283:
case 1157:
case 793:
case 3377:
case 4050:
case 3631:
case 3507:
case 535:
case 756:
case 551:
case 629:
case 944:
case 2257:
case 3367:
case 2593:
case 375:
case 2929:
case 1268:
case 207:
case 1552:
case 1190:
case 3699:
case 2323:
case 1077:
case 1716:
case 3452:
case 3768:
case 2843:
case 2169:
case 2418:
case 1279:
case 2375:
case 2918:
case 3295:
case 3239:
case 1812:
case 3037:
case 2612:
case 2806:
case 25:
case 1606:
case 1674:
case 1794:
case 1675:
case 2875:
case 2250:
case 942:
case 366:
case 3291:
case 585:
case 1907:
case 426:
case 2949:
case 663:
case 3867:
case 780:
case 879:
case 290:
case 1791:
case 1070:
case 2098:
case 219:
case 2871:
case 2313:
case 2286:
case 1703:
case 367:
case 2099:
case 129:
case 866:
case 1842:
case 233:
case 3488:
case 2642:
case 2948:
case 70:
case 1726:
case 3877:
case 552:
case 3492:
case 2630:
case 1738:
case 2031:
case 3238:
case 3659:
case 991:
case 3370:
case 4057:
case 2864:
case 1664:
case 1045:
case 1166:
case 1578:
case 2152:
case 301:
case 1309:
case 2205:
case 368:
case 2719:
case 182:
case 971:
case 1938:
case 3315:
case 3554:
case 3314:
case 1569:
case 2832:
case 3887:
case 1632:
case 2827:
case 1640:
case 2748:
case 3863:
case 727:
case 443:
case 2840:
case 2201:
case 845:
case 1451:
case 3008:
case 399:
case 3551:
case 1903:
case 899:
case 810:
case 521:
case 131:
case 3207:
case 1333:
case 304:
case 3824:
case 2317:
case 2749:
case 1014:
case 2557:
case 345:
case 1015:
case 2885:
case 3516:
case 3479:
case 1105:
case 1176:
case 2402:
case 3341:
case 1568:
case 2266:
case 3356:
case 1416:
case 1011:
case 3119:
case 1610:
case 1681:
case 2718:
case 3821:
case 3468:
case 1308:
case 3968:
case 3594:
case 634:
case 4001:
case 3856:
case 3595:
case 3841:
case 1916:
case 3136:
case 682:
case 2902:
case 1808:
case 1495:
case 22:
case 3979:
case 3321:
case 208:
case 261:
case 2188:
case 181:
case 2729:
case 4076:
case 4004:
case 456:
case 3591:
case 1087:
case 3324:
case 1617:
case 1833:
case 2817:
case 2633:
case 1096:
case 430:
case 849:
case 1289:
case 3363:
case 2253:
case 2340:
case 1288:
case 2586:
case 4066:
case 349:
case 918:
case 802:
case 3788:
case 1620:
case 3129:
case 2820:
case 3811:
case 3880:
case 1946:
case 631:
case 1426:
case 159:
case 3792:
case 1073:
case 2736:
case 3978:
case 2609:
case 758:
case 522:
case 11:
case 1025:
case 1955:
case 3815:
case 264:
case 3396:
case 3814:
case 1024:
case 3387:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1761415202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,];
var gg_b = "1761418801/";

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
