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
case 3375:
case 953:
case 3677:
case 1526:
case 2224:
case 2784:
case 3557:
case 2220:
case 3165:
case 1713:
case 2066:
case 142:
case 1792:
case 805:
case 2780:
case 2864:
case 269:
case 2851:
case 1072:
case 1218:
case 325:
case 965:
case 821:
case 1249:
case 131:
case 2917:
case 2497:
case 3704:
case 2190:
case 1804:
case 662:
case 3656:
case 1594:
case 343:
case 930:
case 2296:
case 1035:
case 3444:
case 3576:
case 3505:
case 1075:
case 2582:
case 3699:
case 1590:
case 1841:
case 4017:
case 3543:
case 2019:
case 3162:
case 1493:
case 463:
case 2048:
case 1795:
case 1412:
case 2688:
case 3022:
case 3741:
case 1992:
case 3846:
case 1733:
case 3617:
case 3044:
case 1435:
case 2171:
case 2350:
case 730:
case 1531:
case 210:
case 2777:
case 2189:
case 592:
case 303:
case 13:
case 1746:
case 3315:
case 3569:
case 1207:
case 1968:
case 3833:
case 3198:
case 2956:
case 2448:
case 1278:
case 3923:
case 2999:
case 2419:
case 827:
case 2203:
case 379:
case 4056:
case 3988:
case 3680:
case 75:
case 150:
case 189:
case 1252:
case 1768:
case 3312:
case 3393:
case 2329:
case 2039:
case 1340:
case 318:
case 3868:
case 1933:
case 461:
case 58:
case 2604:
case 137:
case 1432:
case 1263:
case 4008:
case 539:
case 1823:
case 4077:
case 1255:
case 3228:
case 765:
case 2267:
case 2081:
case 82:
case 2466:
case 3723:
case 3521:
case 341:
case 2161:
case 1883:
case 1755:
case 3728:
case 586:
case 2742:
case 2945:
case 25:
case 3783:
case 3855:
case 1634:
case 164:
case 3579:
case 2903:
case 87:
case 108:
case 1009:
case 3485:
case 2299:
case 3539:
case 2256:
case 893:
case 3863:
case 1630:
case 230:
case 2389:
case 1907:
case 11:
case 826:
case 522:
case 1763:
case 2016:
case 312:
case 1465:
case 1561:
case 459:
case 2814:
case 4045:
case 2501:
case 2405:
case 1144:
case 3852:
case 969:
case 519:
case 1778:
case 877:
case 2891:
case 2703:
case 89:
case 2967:
case 2208:
case 136:
case 1098:
case 2443:
case 3620:
case 3928:
case 1955:
case 2069:
case 2277:
case 3193:
case 1462:
case 1233:
case 670:
case 338:
case 1246:
case 1101:
case 253:
case 117:
case 3365:
case 434:
case 3519:
case 1949:
case 891:
case 1498:
case 3548:
case 395:
case 1610:
case 2326:
case 2759:
case 1295:
case 2870:
case 3135:
case 3106:
case 769:
case 3241:
case 2036:
case 535:
case 3667:
case 284:
case 1385:
case 2874:
case 2076:
case 1047:
case 1614:
case 668:
case 2796:
case 1122:
case 3353:
case 2311:
case 604:
case 1691:
case 1292:
case 3132:
case 2394:
case 466:
case 2002:
case 2186:
case 3085:
case 1409:
case 1718:
case 3603:
case 375:
case 3566:
case 871:
case 1053:
case 2959:
case 3347:
case 251:
case 2416:
case 346:
case 4059:
case 1065:
case 2390:
case 1586:
case 1:
case 2217:
case 910:
case 560:
case 721:
case 3360:
case 1819:
case 3437:
case 1615:
case 162:
case 3243:
case 1384:
case 1290:
case 2679:
case 705:
case 3719:
case 2681:
case 2722:
case 3174:
case 2041:
case 3205:
case 3236:
case 1317:
case 291:
case 2925:
case 2392:
case 3134:
case 524:
case 314:
case 3351:
case 401:
case 2313:
case 3364:
case 425:
case 851:
case 3766:
case 3640:
case 2285:
case 2423:
case 3080:
case 271:
case 3601:
case 367:
case 1866:
case 1124:
case 1612:
case 443:
case 1064:
case 447:
case 1786:
case 3257:
case 2697:
case 1060:
case 2395:
case 923:
case 1427:
case 363:
case 3456:
case 642:
case 3084:
case 996:
case 2118:
case 3114:
case 1750:
case 3583:
case 3622:
case 27:
case 637:
case 3781:
case 1464:
case 3187:
case 2648:
case 2940:
case 2023:
case 432:
case 1451:
case 1555:
case 2163:
case 1881:
case 1879:
case 3480:
case 1675:
case 1635:
case 3484:
case 2155:
case 3056:
case 602:
case 633:
case 407:
case 830:
case 1754:
case 293:
case 4040:
case 3861:
case 1337:
case 2400:
case 1729:
case 1552:
case 2368:
case 1289:
case 72:
case 788:
case 209:
case 1271:
case 2107:
case 418:
case 921:
case 3037:
case 1950:
case 3625:
case 2701:
case 2893:
case 2812:
case 2503:
case 2740:
case 63:
case 3008:
case 853:
case 1897:
case 1538:
case 650:
case 273:
case 3269:
case 2744:
case 3191:
case 1632:
case 1145:
case 776:
case 441:
case 2152:
case 636:
case 1342:
case 1474:
case 3916:
case 1546:
case 2355:
case 726:
case 3310:
case 2657:
case 810:
case 1665:
case 1869:
case 2577:
case 1731:
case 3297:
case 793:
case 2537:
case 1177:
case 797:
case 1573:
case 3003:
case 2240:
case 1470:
case 3871:
case 1091:
case 144:
case 1434:
case 2146:
case 359:
case 3459:
case 406:
case 2378:
case 664:
case 1662:
case 1087:
case 1261:
case 1303:
case 1014:
case 1647:
case 1931:
case 3424:
case 3716:
case 3969:
case 2676:
case 2352:
case 3239:
case 1254:
case 3523:
case 3281:
case 3127:
case 3721:
case 991:
case 2809:
case 709:
case 288:
case 2636:
case 3042:
case 79:
case 2307:
case 2083:
case 190:
case 2338:
case 2643:
case 1010:
case 334:
case 1726:
case 2517:
case 2192:
case 1286:
case 2584:
case 3757:
case 685:
case 3826:
case 3164:
case 973:
case 2669:
case 2865:
case 3024:
case 594:
case 1857:
case 648:
case 221:
case 3702:
case 977:
case 3905:
case 3936:
case 2982:
case 6:
case 3811:
case 1698:
case 2785:
case 3020:
case 3943:
case 1513:
case 3330:
case 611:
case 205:
case 2580:
case 749:
case 1396:
case 791:
case 1592:
case 1711:
case 1320:
case 366:
case 3776:
case 574:
case 1794:
case 540:
case 475:
case 3504:
case 1926:
case 3096:
case 1876:
case 3894:
case 168:
case 1609:
case 3743:
case 1911:
case 3445:
case 3059:
case 3890:
case 1595:
case 1491:
case 3705:
case 3736:
case 997:
case 1790:
case 3219:
case 317:
case 4010:
case 3246:
case 2914:
case 3101:
case 659:
case 1112:
case 883:
case 3447:
case 1597:
case 1838:
case 1624:
case 2512:
case 2791:
case 2316:
case 1878:
case 2197:
case 3098:
case 3752:
case 336:
case 2618:
case 4014:
case 758:
case 2490:
case 3778:
case 4087:
case 313:
case 3144:
case 523:
case 1852:
case 2071:
case 4091:
case 1398:
case 3561:
case 444:
case 3465:
case 3763:
case 2426:
case 2714:
case 3674:
case 3268:
case 31:
case 2181:
case 3554:
case 470:
case 2179:
case 1539:
case 1581:
case 308:
case 2842:
case 2710:
case 2867:
case 2369:
case 3453:
case 1288:
case 3952:
case 3755:
case 1172:
case 2532:
case 2305:
case 505:
case 3382:
case 2638:
case 404:
case 2824:
case 2343:
case 2166:
case 1158:
case 4070:
case 815:
case 2607:
case 521:
case 2974:
case 2260:
case 2558:
case 4030:
case 2934:
case 3053:
case 3749:
case 2970:
case 2264:
case 634:
case 1362:
case 3718:
case 1603:
case 175:
case 3213:
case 1085:
case 1849:
case 1818:
case 2376:
case 3691:
case 724:
case 3687:
case 2148:
case 2730:
case 1353:
case 2774:
case 3122:
case 3047:
case 1204:
case 2535:
case 2302:
case 2859:
case 2090:
case 1200:
case 1082:
case 2471:
case 666:
case 1241:
case 240:
case 274:
case 1548:
case 195:
case 2357:
case 1519:
case 3949:
case 3498:
case 1741:
case 3412:
case 1147:
case 2429:
case 1700:
case 2951:
case 3590:
case 4060:
case 1440:
case 2176:
case 1401:
case 224:
case 147:
case 3800:
case 2668:
case 3006:
case 591:
case 1444:
case 2136:
case 1576:
case 143:
case 549:
case 1372:
case 2366:
case 66:
case 835:
case 331:
case 1358:
case 4051:
case 2547:
case 2880:
case 3218:
case 125:
case 14:
case 3072:
case 2450:
case 1306:
case 1335:
case 3995:
case 3511:
case 3792:
case 1637:
case 2751:
case 1165:
case 663:
case 1608:
case 667:
case 2461:
case 2633:
case 1557:
case 655:
case 3322:
case 2102:
case 1375:
case 2760:
case 2454:
case 3185:
case 3015:
case 302:
case 3458:
case 1425:
case 1521:
case 974:
case 316:
case 526:
case 2509:
case 3973:
case 1228:
case 3344:
case 700:
case 1788:
case 3472:
case 940:
case 878:
case 3301:
case 3432:
case 3340:
case 1109:
case 1868:
case 2287:
case 57:
case 3946:
case 2727:
case 2121:
case 2339:
case 3651:
case 3252:
case 107:
case 898:
case 350:
case 1001:
case 3012:
case 573:
case 2169:
case 2808:
case 2598:
case 3093:
case 3664:
case 4027:
case 2877:
case 3238:
case 577:
case 1315:
case 132:
case 33:
case 1044:
case 1617:
case 3531:
case 3435:
case 1684:
case 3733:
case 1846:
case 2381:
case 417:
case 2709:
case 858:
case 390:
case 954:
case 606:
case 1042:
case 2998:
case 1279:
case 2418:
case 1067:
case 1523:
case 1281:
case 1682:
case 1239:
case 3254:
case 2123:
case 1716:
case 55:
case 286:
case 2188:
case 3087:
case 3261:
case 3662:
case 3816:
case 1459:
case 553:
case 772:
case 3091:
case 1921:
case 344:
case 1889:
case 2798:
case 180:
case 3470:
case 2293:
case 981:
case 3573:
case 298:
case 1314:
case 3177:
case 3653:
case 2212:
case 2626:
case 408:
case 3137:
case 4009:
case 2383:
case 3665:
case 3108:
case 1310:
case 629:
case 3367:
case 2328:
case 557:
case 1769:
case 219:
case 1916:
case 3546:
case 1403:
case 1219:
case 4:
case 3843:
case 3324:
case 304:
case 3595:
case 1445:
case 2104:
case 3911:
case 3034:
case 411:
case 3070:
case 98:
case 3805:
case 3836:
case 3609:
case 1894:
case 2100:
case 715:
case 2965:
case 3030:
case 235:
case 3926:
case 2747:
case 695:
case 3074:
case 1504:
case 448:
case 1776:
case 2438:
case 1374:
case 2689:
case 3117:
case 1442:
case 3396:
case 1467:
case 3184:
case 2018:
case 1943:
case 2455:
case 2049:
case 1330:
case 3698:
case 2564:
case 1266:
case 1936:
case 1160:
case 2258:
case 551:
case 2560:
case 1976:
case 3994:
case 1024:
case 1757:
case 2765:
case 1151:
case 983:
case 3359:
case 2463:
case 1334:
case 2232:
case 134:
case 2631:
case 3180:
case 675:
case 3726:
case 1084:
case 735:
case 2300:
case 2468:
case 2906:
case 2732:
case 3226:
case 3786:
case 64:
case 3120:
case 4075:
case 1257:
case 4006:
case 3693:
case 281:
case 3064:
case 2825:
case 3866:
case 3124:
case 2772:
case 2092:
case 167:
case 2758:
case 1601:
case 1202:
case 1640:
case 1499:
case 894:
case 2013:
case 1477:
case 2932:
case 2706:
case 4072:
case 1364:
case 3986:
case 1351:
case 442:
case 3380:
case 3294:
case 1276:
case 1134:
case 2446:
case 2574:
case 3317:
case 2095:
case 2958:
case 254:
case 1174:
case 1236:
case 1966:
case 874:
case 3290:
case 4032:
case 1243:
case 978:
case 1408:
case 2822:
case 3819:
case 1437:
case 3615:
case 362:
case 922:
case 2775:
case 1360:
case 3399:
case 2844:
case 4015:
case 3231:
case 3145:
case 416:
case 1191:
case 1269:
case 786:
case 3897:
case 1981:
case 778:
case 1979:
case 2073:
case 3950:
case 722:
case 960:
case 1327:
case 510:
case 3672:
case 2495:
case 3289:
case 2840:
case 3729:
case 2793:
case 3552:
case 632:
case 3356:
case 1216:
case 489:
case 3460:
case 2514:
case 1110:
case 2587:
case 450:
case 3308:
case 60:
case 3761:
case 4012:
case 1056:
case 1484:
case 3606:
case 2068:
case 1997:
case 4093:
case 2912:
case 3881:
case 272:
case 2209:
case 1850:
case 1099:
case 556:
case 2510:
case 1779:
case 798:
case 1781:
case 3377:
case 1221:
case 1583:
case 196:
case 2367:
case 2342:
case 123:
case 2546:
case 2474:
case 319:
case 3007:
case 3383:
case 2137:
case 2533:
case 1657:
case 3038:
case 2665:
case 657:
case 2869:
case 1133:
case 398:
case 1508:
case 1537:
case 3212:
case 889:
case 127:
case 1146:
case 1363:
case 1201:
case 2470:
case 3052:
case 538:
case 386:
case 2647:
case 2816:
case 4071:
case 2662:
case 400:
case 2261:
case 2087:
case 4089:
case 3123:
case 3527:
case 2568:
case 816:
case 2250:
case 1168:
case 1599:
case 3449:
case 1338:
case 4031:
case 833:
case 2010:
case 506:
case 378:
case 2971:
case 322:
case 1307:
case 962:
case 1083:
case 474:
case 1113:
case 3962:
case 1584:
case 651:
case 1517:
case 3947:
case 1192:
case 3463:
case 2994:
case 1865:
case 3560:
case 4090:
case 2414:
case 575:
case 440:
case 1982:
case 4094:
case 2990:
case 1483:
case 1225:
case 1580:
case 3885:
case 3689:
case 2513:
case 1428:
case 3049:
case 2184:
case 105:
case 3018:
case 1862:
case 2794:
case 2320:
case 595:
case 3762:
case 1318:
case 4011:
case 2030:
case 831:
case 1349:
case 3141:
case 2911:
case 2034:
case 3953:
case 268:
case 2609:
case 3452:
case 4026:
case 3478:
case 2790:
case 1222:
case 2843:
case 3822:
case 2848:
case 3972:
case 2819:
case 262:
case 149:
case 1041:
case 543:
case 3958:
case 3650:
case 2384:
case 2290:
case 1000:
case 3570:
case 1806:
case 3530:
case 1313:
case 3247:
case 3661:
case 3433:
case 171:
case 3092:
case 704:
case 1872:
case 2518:
case 1285:
case 2693:
case 1858:
case 381:
case 1520:
case 885:
case 848:
case 970:
case 2124:
case 3975:
case 2612:
case 2211:
case 3732:
case 2226:
case 3906:
case 501:
case 424:
case 8:
case 2786:
case 2120:
case 669:
case 811:
case 1832:
case 1118:
case 315:
case 3341:
case 54:
case 182:
case 1815:
case 864:
case 1333:
case 1648:
case 1901:
case 1088:
case 770:
case 2750:
case 2377:
case 197:
case 2881:
case 1163:
case 744:
case 372:
case 3492:
case 656:
case 3912:
case 904:
case 1023:
case 1567:
case 2929:
case 38:
case 3413:
case 328:
case 2451:
case 3209:
case 3128:
case 1155:
case 50:
case 4029:
case 2563:
case 3068:
case 2635:
case 2606:
case 1944:
case 193:
case 3183:
case 2337:
case 126:
case 2754:
case 3587:
case 220:
case 1368:
case 3840:
case 2289:
case 3495:
case 3712:
case 1441:
case 392:
case 2672:
case 1400:
case 3801:
case 2552:
case 3298:
case 1503:
case 3073:
case 1138:
case 610:
case 1107:
case 19:
case 177:
case 790:
case 1701:
case 579:
case 458:
case 1744:
case 3033:
case 2954:
case 2897:
case 383:
case 1152:
case 2399:
case 3323:
case 3844:
case 2632:
case 2231:
case 1404:
case 3991:
case 1742:
case 352:
case 1945:
case 3411:
case 2453:
case 2755:
case 419:
case 1767:
case 4007:
case 3842:
case 208:
case 1154:
case 1299:
case 2670:
case 15:
case 2828:
case 2634:
case 4038:
case 2550:
case 750:
case 264:
case 3181:
case 2465:
case 2561:
case 1457:
case 62:
case 1814:
case 688:
case 3426:
case 645:
case 1887:
case 931:
case 1016:
case 486:
case 3649:
case 1891:
case 3910:
case 165:
case 1703:
case 1436:
case 3071:
case 300:
case 3316:
case 3197:
case 1745:
case 3791:
case 696:
case 1237:
case 1967:
case 4063:
case 3593:
case 2955:
case 820:
case 1129:
case 1069:
case 2963:
case 2447:
case 2246:
case 1544:
case 1476:
case 3914:
case 3494:
case 2707:
case 217:
case 478:
case 2738:
case 374:
case 742:
case 1759:
case 1522:
case 3734:
case 2949:
case 3770:
case 1043:
case 566:
case 3357:
case 862:
case 3655:
case 1628:
case 1920:
case 1834:
case 3859:
case 3489:
case 2295:
case 340:
case 1005:
case 1830:
case 3663:
case 937:
case 1076:
case 3506:
case 3896:
case 3119:
case 2062:
case 460:
case 3148:
case 2614:
case 4049:
case 2122:
case 1469:
case 1186:
case 1720:
case 2409:
case 248:
case 285:
case 2292:
case 3376:
case 3572:
case 1394:
case 2053:
case 435:
case 1959:
case 1421:
case 394:
case 1525:
case 3558:
case 2718:
case 3264:
case 3678:
case 3638:
case 3930:
case 3166:
case 731:
case 3974:
case 1416:
case 211:
case 3026:
case 1217:
case 3532:
case 1284:
case 2586:
case 2382:
case 3884:
case 3646:
case 3102:
case 3086:
case 2185:
case 1439:
case 1784:
case 671:
case 4095:
case 3565:
case 454:
case 3319:
case 1717:
case 1224:
case 2415:
case 2792:
case 3553:
case 1864:
case 1126:
case 2995:
case 936:
case 1220:
case 3751:
case 1066:
case 1481:
case 2218:
case 3880:
case 2249:
case 169:
case 2072:
case 1851:
case 649:
case 3366:
case 1984:
case 4013:
case 711:
case 56:
case 7:
case 1296:
case 3274:
case 2006:
case 3105:
case 3136:
case 3230:
case 1190:
case 3270:
case 1582:
case 748:
case 2590:
case 1386:
case 785:
case 1259:
case 3234:
case 2412:
case 1980:
case 1688:
case 415:
case 0:
case 1048:
case 3429:
case 71:
case 2531:
case 1350:
case 1171:
case 110:
case 1777:
case 472:
case 3877:
case 1097:
case 48:
case 561:
case 911:
case 2968:
case 1419:
case 844:
case 3598:
case 1203:
case 2651:
case 708:
case 1708:
case 3339:
case 948:
case 1354:
case 870:
case 2475:
case 1131:
case 2571:
case 985:
case 3692:
case 764:
case 1737:
case 3061:
case 3287:
case 1756:
case 156:
case 1329:
case 487:
case 3727:
case 2946:
case 1977:
case 4073:
case 2263:
case 2301:
case 717:
case 1827:
case 67:
case 697:
case 2255:
case 3509:
case 1908:
case 693:
case 1081:
case 1267:
case 1937:
case 2472:
case 1242:
case 483:
case 3116:
case 3210:
case 736:
case 1466:
case 1799:
case 2888:
case 263:
case 846:
case 2886:
case 2017:
case 3395:
case 2644:
case 1468:
case 2084:
case 3118:
case 1300:
case 3149:
case 2257:
case 1265:
case 1906:
case 1732:
case 3524:
case 542:
case 3697:
case 3488:
case 1772:
case 3858:
case 181:
case 980:
case 2766:
case 1304:
case 371:
case 2080:
case 469:
case 624:
case 3596:
case 214:
case 4066:
case 2276:
case 3004:
case 734:
case 1446:
case 2170:
case 2351:
case 3313:
case 3639:
case 3835:
case 3000:
case 2966:
case 3282:
case 3681:
case 2719:
case 3875:
case 3679:
case 1095:
case 3925:
case 1958:
case 154:
case 1650:
case 2236:
case 2437:
case 1972:
case 531:
case 2360:
case 1473:
case 1822:
case 550:
case 1046:
case 3404:
case 3152:
case 183:
case 3178:
case 3744:
case 4081:
case 1388:
case 4079:
case 2625:
case 261:
case 2829:
case 39:
case 2037:
case 829:
case 3666:
case 2979:
case 3503:
case 3812:
case 1801:
case 1793:
case 53:
case 3545:
case 192:
case 456:
case 3441:
case 2327:
case 3368:
case 1712:
case 1840:
case 966:
case 2110:
case 1587:
case 3373:
case 326:
case 502:
case 2861:
case 2216:
case 2854:
case 533:
case 806:
case 2997:
case 1128:
case 812:
case 18:
case 3023:
case 780:
case 2480:
case 759:
case 3163:
case 3346:
case 537:
case 172:
case 1715:
case 2583:
case 2221:
case 37:
case 3901:
case 2114:
case 2187:
case 3333:
case 410:
case 3648:
case 382:
case 2781:
case 3307:
case 761:
case 3083:
case 1215:
case 453:
case 178:
case 80:
case 3338:
case 3028:
case 841:
case 1998:
case 4069:
case 899:
case 2523:
case 2682:
case 2721:
case 32:
case 2042:
case 388:
case 3605:
case 96:
case 2127:
case 564:
case 914:
case 1527:
case 1694:
case 3556:
case 376:
case 508:
case 3378:
case 2424:
case 465:
case 818:
case 2871:
case 879:
case 2889:
case 1798:
case 3146:
case 3602:
case 2459:
case 327:
case 2921:
case 2314:
case 3537:
case 1212:
case 3898:
case 1611:
case 1293:
case 1078:
case 2387:
case 1909:
case 2003:
case 600:
case 1038:
case 45:
case 3657:
case 2297:
case 1007:
case 513:
case 2916:
case 2496:
case 323:
case 2831:
case 3355:
case 2902:
case 3621:
case 2736:
case 847:
case 2219:
case 2248:
case 755:
case 1452:
case 2890:
case 2059:
case 2445:
case 1953:
case 4057:
case 1275:
case 1747:
case 1235:
case 2504:
case 2894:
case 3349:
case 451:
case 2957:
case 135:
case 3847:
case 3862:
case 2467:
case 2943:
case 1049:
case 3428:
case 1455:
case 2330:
case 801:
case 160:
case 1885:
case 1689:
case 5:
case 1272:
case 2905:
case 511:
case 961:
case 2160:
case 1258:
case 4076:
case 2020:
case 1564:
case 2266:
case 2164:
case 1560:
case 3192:
case 2334:
case 1962:
case 694:
case 1765:
case 2543:
case 775:
case 3019:
case 2022:
case 2147:
case 3688:
case 3259:
case 2536:
case 3194:
case 3623:
case 1270:
case 2440:
case 2895:
case 1668:
case 1274:
case 1136:
case 2372:
case 562:
case 912:
case 1547:
case 3917:
case 906:
case 3984:
case 471:
case 24:
case 2813:
case 369:
case 929:
case 2306:
case 1880:
case 1764:
case 3481:
case 3585:
case 2892:
case 1751:
case 3066:
case 2608:
case 3220:
case 1157:
case 2025:
case 3864:
case 201:
case 2941:
case 4000:
case 3717:
case 2677:
case 2904:
case 834:
case 1319:
case 3784:
case 1348:
case 4041:
case 938:
case 1817:
case 1086:
case 1646:
case 1102:
case 1760:
case 995:
case 1397:
case 2425:
case 241:
case 2788:
case 3937:
case 3242:
case 3600:
case 2228:
case 1509:
case 158:
case 3827:
case 1486:
case 218:
case 477:
case 49:
case 1054:
case 2109:
case 628:
case 2516:
case 1727:
case 2312:
case 409:
case 1291:
case 1692:
case 3131:
case 2988:
case 426:
case 3245:
case 2040:
case 493:
case 1339:
case 3708:
case 3361:
case 3203:
case 1598:
case 3448:
case 1029:
case 975:
case 683:
case 1808:
case 1169:
case 279:
case 712:
case 2833:
case 687:
case 2315:
case 706:
case 2198:
case 2684:
case 47:
case 1379:
case 1381:
case 2846:
case 4088:
case 3777:
case 310:
case 203:
case 482:
case 3171:
case 520:
case 238:
case 2309:
case 4083:
case 718:
case 353:
case 1494:
case 1031:
case 3544:
case 3476:
case 4028:
case 2112:
case 3069:
case 2838:
case 42:
case 2807:
case 3129:
case 3443:
case 2928:
case 3967:
case 3208:
case 1512:
case 1803:
case 3237:
case 799:
case 1316:
case 476:
case 357:
case 94:
case 3436:
case 3405:
case 70:
case 3501:
case 1071:
case 2852:
case 2482:
case 1910:
case 3540:
case 1618:
case 3891:
case 1490:
case 1649:
case 2115:
case 212:
case 732:
case 1426:
case 3457:
case 427:
case 2863:
case 1787:
case 622:
case 3256:
case 1714:
case 1227:
case 943:
case 3331:
case 1867:
case 707:
case 35:
case 3402:
case 2659:
case 2783:
case 2223:
case 2485:
case 686:
case 1139:
case 3903:
case 2579:
case 3767:
case 3161:
case 423:
case 1369:
case 152:
case 2288:
case 779:
case 3021:
case 1991:
case 3742:
case 3284:
case 3390:
case 3217:
case 1532:
case 2172:
case 1305:
case 743:
case 2158:
case 1026:
case 1607:
case 932:
case 1974:
case 1930:
case 1166:
case 863:
case 3057:
case 2566:
case 1264:
case 2362:
case 2603:
case 351:
case 3525:
case 194:
case 3421:
case 979:
case 3959:
case 2132:
case 747:
case 3720:
case 2085:
case 2353:
case 3469:
case 405:
case 814:
case 3874:
case 1896:
case 918:
case 568:
case 1431:
case 2175:
case 3924:
case 1302:
case 1094:
case 1575:
case 2106:
case 3036:
case 3005:
case 74:
case 1489:
case 140:
case 3628:
case 3920:
case 1090:
case 1859:
case 86:
case 2548:
case 1357:
case 1770:
case 3043:
case 999:
case 701:
case 941:
case 174:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1743516002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,];
var gg_b = "1743516002/";

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
