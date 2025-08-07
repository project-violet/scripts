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
case 3673:
case 200:
case 430:
case 371:
case 4031:
case 3881:
case 3732:
case 3522:
case 1138:
case 1087:
case 386:
case 2527:
case 536:
case 407:
case 1295:
case 4053:
case 1163:
case 2353:
case 1192:
case 237:
case 2925:
case 3414:
case 3738:
case 3528:
case 1132:
case 2687:
case 1983:
case 1284:
case 666:
case 755:
case 2391:
case 2441:
case 3763:
case 1198:
case 3792:
case 1236:
case 2882:
case 322:
case 470:
case 331:
case 1917:
case 3299:
case 39:
case 106:
case 2753:
case 3887:
case 2447:
case 3239:
case 3504:
case 1515:
case 860:
case 3409:
case 3280:
case 811:
case 2560:
case 2474:
case 906:
case 3392:
case 3456:
case 3442:
case 2579:
case 2791:
case 3786:
case 3189:
case 3130:
case 158:
case 3696:
case 3477:
case 2099:
case 719:
case 962:
case 1561:
case 3843:
case 797:
case 3394:
case 3444:
case 55:
case 2507:
case 114:
case 1789:
case 2039:
case 713:
case 3508:
case 1520:
case 1730:
case 2884:
case 2080:
case 2905:
case 1699:
case 1425:
case 162:
case 3969:
case 2478:
case 1941:
case 3636:
case 1552:
case 3970:
case 374:
case 3190:
case 320:
case 453:
case 2836:
case 2123:
case 1185:
case 602:
case 1282:
case 3635:
case 1390:
case 1043:
case 1440:
case 2959:
case 1330:
case 3695:
case 1389:
case 2643:
case 1947:
case 3524:
case 2910:
case 1288:
case 459:
case 1965:
case 1273:
case 125:
case 584:
case 3974:
case 325:
case 149:
case 2551:
case 739:
case 134:
case 2942:
case 2568:
case 2084:
case 2035:
case 2880:
case 2533:
case 2909:
case 2839:
case 1418:
case 3545:
case 24:
case 3440:
case 2095:
case 2899:
case 2948:
case 2287:
case 2593:
case 1635:
case 3282:
case 143:
case 733:
case 3567:
case 1386:
case 282:
case 3134:
case 3426:
case 120:
case 768:
case 174:
case 1190:
case 1636:
case 3941:
case 3546:
case 362:
case 2096:
case 3699:
case 3425:
case 4023:
case 3730:
case 2557:
case 1334:
case 3789:
case 3790:
case 314:
case 974:
case 3639:
case 64:
case 226:
case 3561:
case 1696:
case 1477:
case 2281:
case 1130:
case 358:
case 448:
case 1502:
case 1786:
case 1189:
case 1442:
case 605:
case 1392:
case 217:
case 1363:
case 299:
case 99:
case 475:
case 516:
case 1280:
case 922:
case 3013:
case 1409:
case 2703:
case 2929:
case 1239:
case 3515:
case 487:
case 2191:
case 2971:
case 1448:
case 3554:
case 1398:
case 3459:
case 1887:
case 1299:
case 19:
case 741:
case 1332:
case 598:
case 360:
case 2073:
case 1763:
case 205:
case 2469:
case 435:
case 2575:
case 2137:
case 1682:
case 699:
case 2564:
case 311:
case 2303:
case 1414:
case 3295:
case 2944:
case 3087:
case 186:
case 2082:
case 3911:
case 1732:
case 1522:
case 693:
case 2977:
case 115:
case 2476:
case 1173:
case 236:
case 830:
case 1993:
case 3454:
case 406:
case 3559:
case 1037:
case 2787:
case 387:
case 3853:
case 751:
case 3506:
case 3901:
case 170:
case 3773:
case 915:
case 3891:
case 1556:
case 1951:
case 1182:
case 667:
case 1803:
case 1509:
case 1933:
case 824:
case 2223:
case 2313:
case 3698:
case 4013:
case 3290:
case 4087:
case 2387:
case 3907:
case 276:
case 1053:
case 870:
case 577:
case 815:
case 130:
case 1422:
case 723:
case 3382:
case 1286:
case 585:
case 1091:
case 2892:
case 2863:
case 907:
case 2631:
case 335:
case 729:
case 460:
case 2570:
case 2838:
case 267:
case 1957:
case 930:
case 3230:
case 3388:
case 3400:
case 3289:
case 2343:
case 2090:
case 25:
case 959:
case 1630:
case 1799:
case 1571:
case 3395:
case 1196:
case 832:
case 1976:
case 796:
case 153:
case 3467:
case 3139:
case 3526:
case 3921:
case 3960:
case 3796:
case 3199:
case 2468:
case 312:
case 1780:
case 2030:
case 1739:
case 2089:
case 1518:
case 1690:
case 1544:
case 3927:
case 3458:
case 1399:
case 3634:
case 1449:
case 414:
case 3461:
case 1184:
case 3336:
case 348:
case 2886:
case 458:
case 1402:
case 1263:
case 462:
case 1975:
case 284:
case 3452:
case 1195:
case 3396:
case 859:
case 1339:
case 1238:
case 2928:
case 2457:
case 2919:
case 2583:
case 1023:
case 3380:
case 2085:
case 2034:
case 1735:
case 2143:
case 1446:
case 812:
case 1452:
case 3195:
case 3964:
case 3263:
case 2511:
case 2916:
case 321:
case 332:
case 738:
case 3184:
case 582:
case 3135:
case 1336:
case 627:
case 1685:
case 2237:
case 2890:
case 2623:
case 1458:
case 2407:
case 1795:
case 3298:
case 3518:
case 3823:
case 3690:
case 3136:
case 1384:
case 2915:
case 3424:
case 3780:
case 112:
case 1199:
case 1979:
case 449:
case 763:
case 2291:
case 3512:
case 2086:
case 778:
case 443:
case 1526:
case 1139:
case 2401:
case 1921:
case 769:
case 372:
case 420:
case 3799:
case 3196:
case 526:
case 227:
case 2954:
case 3630:
case 70:
case 848:
case 2517:
case 3689:
case 3514:
case 2920:
case 1897:
case 1400:
case 3419:
case 216:
case 324:
case 580:
case 298:
case 593:
case 3053:
case 2958:
case 935:
case 2566:
case 3555:
case 1698:
case 1510:
case 3097:
case 2547:
case 1415:
case 3285:
case 3234:
case 3933:
case 3182:
case 1788:
case 3803:
case 616:
case 3556:
case 161:
case 1891:
case 1773:
case 175:
case 3968:
case 910:
case 698:
case 422:
case 2032:
case 1782:
case 2945:
case 187:
case 1853:
case 1559:
case 1638:
case 3548:
case 3173:
case 2098:
case 3993:
case 2357:
case 2672:
case 4057:
case 2101:
case 2733:
case 2523:
case 3320:
case 2829:
case 1145:
case 3346:
case 818:
case 289:
case 98:
case 2751:
case 1256:
case 1078:
case 1302:
case 721:
case 732:
case 3767:
case 2678:
case 896:
case 3124:
case 3436:
case 1011:
case 338:
case 1594:
case 1248:
case 18:
case 3361:
case 3259:
case 497:
case 419:
case 2871:
case 3358:
case 2793:
case 2762:
case 3671:
case 4033:
case 3530:
case 3883:
case 1640:
case 1324:
case 1214:
case 3589:
case 3612:
case 689:
case 51:
case 1158:
case 996:
case 3149:
case 1161:
case 363:
case 759:
case 2270:
case 2877:
case 690:
case 1120:
case 918:
case 378:
case 2026:
case 954:
case 3590:
case 1255:
case 4093:
case 3618:
case 842:
case 196:
case 3758:
case 3872:
case 1749:
case 2443:
case 1146:
case 3761:
case 3488:
case 2121:
case 2939:
case 1229:
case 1319:
case 3715:
case 1704:
case 1328:
case 2666:
case 940:
case 2980:
case 2005:
case 1218:
case 3069:
case 3473:
case 4064:
case 2364:
case 1041:
case 2856:
case 123:
case 3482:
case 3226:
case 2641:
case 3104:
case 730:
case 1212:
case 707:
case 2776:
case 2999:
case 2848:
case 1605:
case 22:
case 3754:
case 2487:
case 851:
case 1271:
case 646:
case 1116:
case 2413:
case 1719:
case 829:
case 3225:
case 2814:
case 1047:
case 3700:
case 2010:
case 1592:
case 1870:
case 1074:
case 3119:
case 2674:
case 2006:
case 3656:
case 1532:
case 3128:
case 2665:
case 3642:
case 428:
case 1100:
case 1610:
case 2647:
case 823:
case 1943:
case 246:
case 840:
case 3609:
case 3354:
case 547:
case 1354:
case 2272:
case 2164:
case 657:
case 2175:
case 2048:
case 3610:
case 3598:
case 1656:
case 3722:
case 761:
case 2278:
case 3074:
case 2056:
case 3870:
case 3065:
case 2042:
case 4060:
case 1841:
case 3592:
case 2935:
case 2597:
case 3047:
case 1700:
case 710:
case 3659:
case 3304:
case 3116:
case 2859:
case 556:
case 257:
case 1754:
case 2327:
case 2217:
case 2669:
case 3115:
case 1316:
case 2531:
case 1482:
case 323:
case 2670:
case 2806:
case 2760:
case 1874:
case 3154:
case 145:
case 2779:
case 1473:
case 2014:
case 3229:
case 1715:
case 1488:
case 963:
case 2071:
case 1761:
case 1872:
case 3146:
case 1345:
case 1629:
case 3152:
case 396:
case 2707:
case 1495:
case 1590:
case 3017:
case 1618:
case 3981:
case 2012:
case 169:
case 1108:
case 433:
case 3120:
case 178:
case 508:
case 203:
case 444:
case 163:
case 695:
case 3626:
case 209:
case 3158:
case 3324:
case 3214:
case 1205:
case 2018:
case 712:
case 2029:
case 969:
case 1102:
case 2825:
case 1720:
case 1671:
case 1435:
case 2307:
case 53:
case 4007:
case 2151:
case 1817:
case 2840:
case 3987:
case 878:
case 3011:
case 138:
case 473:
case 2982:
case 1206:
case 1124:
case 603:
case 80:
case 342:
case 2077:
case 1767:
case 2193:
case 1496:
case 2973:
case 3078:
case 2265:
case 1346:
case 3145:
case 1320:
case 3083:
case 1210:
case 66:
case 3585:
case 3209:
case 3724:
case 3308:
case 454:
case 3667:
case 725:
case 1144:
case 61:
case 3645:
case 3857:
case 1489:
case 2783:
case 418:
case 1200:
case 3318:
case 3228:
case 2693:
case 1584:
case 4017:
case 2772:
case 496:
case 2861:
case 3250:
case 1595:
case 1807:
case 2711:
case 583:
case 897:
case 3777:
case 1596:
case 368:
case 379:
case 2378:
case 997:
case 4078:
case 3718:
case 1112:
case 3539:
case 2008:
case 1215:
case 1057:
case 3903:
case 2383:
case 3485:
case 3661:
case 3580:
case 113:
case 3344:
case 3862:
case 197:
case 2845:
case 1254:
case 4072:
case 3494:
case 3712:
case 758:
case 1536:
case 3377:
case 3652:
case 2002:
case 2221:
case 2867:
case 688:
case 2311:
case 4011:
case 3060:
case 3342:
case 3864:
case 2741:
case 3463:
case 3492:
case 2800:
case 2676:
case 3309:
case 2930:
case 3208:
case 4047:
case 2989:
case 1827:
case 2170:
case 3348:
case 52:
case 3615:
case 1258:
case 2207:
case 2766:
case 2169:
case 706:
case 3755:
case 3498:
case 1306:
case 3105:
case 592:
case 2816:
case 2341:
case 3616:
case 1064:
case 760:
case 3756:
case 3159:
case 1573:
case 2491:
case 2815:
case 1710:
case 1650:
case 1305:
case 3923:
case 2028:
case 3224:
case 1588:
case 546:
case 247:
case 1628:
case 2366:
case 3600:
case 955:
case 1245:
case 2854:
case 828:
case 423:
case 2201:
case 1706:
case 2431:
case 2675:
case 1582:
case 440:
case 1821:
case 771:
case 2016:
case 3706:
case 3109:
case 2147:
case 150:
case 1110:
case 1748:
case 1600:
case 786:
case 3759:
case 1355:
case 3628:
case 2165:
case 1027:
case 841:
case 2994:
case 2293:
case 656:
case 2403:
case 3305:
case 1106:
case 1314:
case 2627:
case 1224:
case 2934:
case 2985:
case 2804:
case 3710:
case 2370:
case 2251:
case 3879:
case 1756:
case 1159:
case 3075:
case 2660:
case 1021:
case 141:
case 1202:
case 731:
case 2679:
case 3306:
case 1105:
case 1755:
case 3604:
case 1615:
case 2054:
case 256:
case 850:
case 1249:
case 3827:
case 3261:
case 2828:
case 3220:
case 2257:
case 1208:
case 2015:
case 3705:
case 1463:
case 2769:
case 1079:
case 1356:
case 3155:
case 3246:
case 294:
case 1875:
case 1060:
case 2770:
case 152:
case 438:
case 1377:
case 3931:
case 1712:
case 3801:
case 3118:
case 979:
case 3740:
case 319:
case 397:
case 1007:
case 2058:
case 3254:
case 3953:
case 1862:
case 968:
case 1893:
case 1771:
case 2061:
case 1344:
case 1661:
case 2824:
case 973:
case 2423:
case 1729:
case 56:
case 3325:
case 1126:
case 1658:
case 839:
case 1204:
case 1718:
case 3112:
case 1851:
case 1868:
case 2046:
case 3171:
case 3991:
case 3216:
case 1777:
case 2067:
case 720:
case 1312:
case 469:
case 1222:
case 2932:
case 478:
case 1001:
case 133:
case 2045:
case 3490:
case 852:
case 2:
case 1250:
case 3595:
case 23:
case 2543:
case 2849:
case 3093:
case 3340:
case 2178:
case 3997:
case 3725:
case 3177:
case 3535:
case 1318:
case 1228:
case 2938:
case 1857:
case 2111:
case 3489:
case 734:
case 3144:
case 2601:
case 595:
case 2992:
case 3068:
case 2264:
case 1527:
case 3243:
case 2087:
case 1466:
case 747:
case 2163:
case 137:
case 2192:
case 2295:
case 877:
case 3082:
case 2516:
case 2911:
case 1391:
case 3564:
case 3469:
case 305:
case 260:
case 937:
case 1441:
case 1925:
case 900:
case 1797:
case 3303:
case 2284:
case 2983:
case 206:
case 177:
case 1613:
case 507:
case 1337:
case 3576:
case 2554:
case 985:
case 2236:
case 380:
case 3912:
case 2406:
case 966:
case 1103:
case 837:
case 317:
case 977:
case 399:
case 1465:
case 1474:
case 1791:
case 660:
case 2410:
case 3131:
case 3703:
case 166:
case 2680:
case 3955:
case 2966:
case 214:
case 2558:
case 1507:
case 3036:
case 102:
case 258:
case 553:
case 572:
case 2941:
case 484:
case 71:
case 1478:
case 2552:
case 1039:
case 1483:
case 3213:
case 1080:
case 2425:
case 1835:
case 1884:
case 2390:
case 2043:
case 3948:
case 45:
case 3562:
case 2440:
case 1959:
case 3095:
case 2426:
case 1123:
case 1906:
case 532:
case 1836:
case 658:
case 2567:
case 382:
case 2134:
case 3942:
case 225:
case 2273:
case 2974:
case 3551:
case 3956:
case 4030:
case 3909:
case 2288:
case 3084:
case 4089:
case 2389:
case 2947:
case 1643:
case 2785:
case 3643:
case 1880:
case 982:
case 1084:
case 1035:
case 2418:
case 1839:
case 2429:
case 1533:
case 1909:
case 1551:
case 249:
case 1568:
case 234:
case 1942:
case 243:
case 548:
case 220:
case 826:
case 2412:
case 3501:
case 3123:
case 3959:
case 427:
case 2794:
case 3417:
case 1287:
case 2635:
case 1948:
case 3835:
case 512:
case 3884:
case 3080:
case 1213:
case 2385:
case 4085:
case 2636:
case 2970:
case 274:
case 649:
case 1096:
case 634:
case 2969:
case 926:
case 2130:
case 643:
case 1281:
case 2477:
case 3411:
case 2189:
case 564:
case 2502:
case 3895:
case 882:
case 3099:
case 1955:
case 126:
case 2394:
case 77:
case 366:
case 3888:
case 1918:
case 993:
case 2239:
case 3447:
case 980:
case 794:
case 3579:
case 3791:
case 535:
case 3681:
case 117:
case 2363:
case 3103:
case 3731:
case 3882:
case 1912:
case 231:
case 2332:
case 180:
case 1971:
case 686:
case 917:
case 2398:
case 2887:
case 3940:
case 2813:
case 1088:
case 3687:
case 3797:
case 2414:
case 510:
case 105:
case 1469:
case 2763:
case 1564:
case 1575:
case 1137:
case 3391:
case 2881:
case 498:
case 2732:
case 1082:
case 2673:
case 265:
case 1197:
case 271:
case 3466:
case 337:
case 2798:
case 880:
case 587:
case 1243:
case 1944:
case 3527:
case 3737:
case 3421:
case 3032:
case 630:
case 2188:
case 270:
case 1381:
case 1476:
case 215:
case 2294:
case 2993:
case 1697:
case 136:
case 1787:
case 3945:
case 2509:
case 1637:
case 3038:
case 2803:
case 511:
case 1924:
case 1223:
case 466:
case 2542:
case 560:
case 2968:
case 3479:
case 2556:
case 1902:
case 792:
case 2422:
case 836:
case 1832:
case 1781:
case 400:
case 2286:
case 181:
case 670:
case 615:
case 1387:
case 437:
case 506:
case 3958:
case 207:
case 3603:
case 72:
case 167:
case 2957:
case 1908:
case 1653:
case 2419:
case 1838:
case 1713:
case 3181:
case 981:
case 2514:
case 3920:
case 1892:
case 1569:
case 224:
case 1631:
case 3952:
case 976:
case 3231:
case 2512:
case 3401:
case 1894:
case 514:
case 1343:
case 3517:
case 1090:
case 2196:
case 2571:
case 1462:
case 3253:
case 2630:
case 1203:
case 1030:
case 2424:
case 884:
case 1834:
case 2823:
case 2518:
case 2739:
case 259:
case 1451:
case 304:
case 95:
case 1468:
case 85:
case 653:
case 2184:
case 3916:
case 783:
case 1922:
case 1886:
case 221:
case 2402:
case 232:
case 2544:
case 3890:
case 2298:
case 3572:
case 3237:
case 3900:
case 3085:
case 4039:
case 3034:
case 2238:
case 1919:
case 1928:
case 1457:
case 184:
case 525:
case 2263:
case 789:
case 3143:
case 1143:
case 1578:
case 384:
case 795:
case 3928:
case 2023:
case 3919:
case 1297:
case 2784:
case 1830:
case 2735:
case 1085:
case 2420:
case 804:
case 1034:
case 2685:
case 3950:
case 2634:
case 1237:
case 2461:
case 1572:
case 2927:
case 1623:
case 1407:
case 1916:
case 2336:
case 248:
case 543:
case 927:
case 2199:
case 709:
case 104:
case 3451:
case 574:
case 4035:
case 4084:
case 3089:
case 3834:
case 3203:
case 76:
case 1954:
case 4095:
case 2395:
case 3493:
case 3343:
case 35:
case 1517:
case 3090:
case 2736:
case 703:
case 264:
case 2467:
case 1231:
case 1952:
case 3631:
case 116:
case 2373:
case 235:
case 3570:
case 3863:
case 675:
case 998:
case 610:
case 2400:
case 2388:
case 4088:
case 2505:
case 3713:
case 2003:
case 367:
case 2230:
case 2907:
case 916:
case 376:
case 687:
case 1603:
case 1427:
case 2837:
case 2290:
case 3898:
case 3949:
case 2382:
case 4082:
case 1113:
case 3781:
case 3902:
case 2632:
case 1565:
case 635:
case 1187:
case 1574:
case 275:
case 1063:
case 2773:
case 499:
case 261:
case 2891:
case 417:
case 816:
case 210:
case 2510:
case 2698:
case 1038:
case 2638:
case 2853:
case 287:
case 1945:
case 3476:
case 3697:
case 3381:
case 1967:
case 2663:
case 571:
case 2692:
case 2831:
case 1751:
case 1611:
case 3193:
case 1768:
case 395:
case 3162:
case 3274:
case 2078:
case 2256:
case 3265:
case 4008:
case 2724:
case 2534:
case 618:
case 2480:
case 1357:
case 2308:
case 1025:
case 990:
case 1101:
case 28:
case 3044:
case 4049:
case 3151:
case 696:
case 1683:
case 989:
case 1793:
case 2499:
case 3307:
case 2625:
case 1871:
case 183:
case 1678:
case 3077:
case 3701:
case 1812:
case 309:
case 1368:
case 3241:
case 1107:
case 2158:
case 254:
case 2324:
case 2913:
case 36:
case 3018:
case 2640:
case 3029:
case 1362:
case 1040:
case 3707:
case 3266:
case 519:
case 1844:
case 2255:
case 2017:
case 1443:
case 1877:
case 642:
case 2120:
case 2586:
case 3012:
case 1026:
case 2702:
case 229:
case 1364:
case 2041:
case 2154:
case 3591:
case 1842:
case 92:
case 3996:
case 1939:
case 767:
case 4019:
case 2319:
case 447:
case 1776:
case 2605:
case 2350:
case 2271:
case 1487:
case 1160:
case 3859:
case 3553:
case 4050:
case 3531:
case 223:
case 528:
case 3670:
case 240:
case 846:
case 2212:
case 3042:
case 2869:
case 2563:
case 2592:
case 629:
case 2606:
case 2659:
case 4004:
case 2719:
case 2304:
case 3935:
case 3597:
case 2047:
case 2244:
case 2943:
case 1855:
case 1647:
case 2750:
case 2598:
case 2610:
case 3164:
case 146:
case 1059:
case 892:
case 3727:
case 3537:
case 3175:
case 736:
case 623:
case 2532:
case 1481:
case 3211:
case 3321:
case 2642:
case 1321:
case 2716:
case 2119:
case 3481:
case 3006:
case 4054:
case 1995:
case 1537:
case 3647:
case 3855:
case 1805:
case 3814:
case 2648:
case 1283:
case 1984:
case 3010:
case 1597:
case 2315:
case 2225:
case 4015:
case 1056:
case 3127:
case 1379:
case 3764:
case 2841:
case 2150:
case 2226:
case 2316:
case 2104:
case 798:
case 1531:
case 1553:
case 157:
case 3487:
case 3160:
case 1859:
case 3776:
case 1327:
case 3179:
case 1055:
case 2715:
case 3980:
case 1014:
case 3809:
case 3503:
case 4000:
case 3121:
case 957:
case 3856:
case 2473:
case 1779:
case 2069:
case 3375:
case 716:
case 3364:
case 3026:
case 2367:
case 103:
case 1301:
case 573:
case 2345:
case 4:
case 2761:
case 1071:
case 727:
case 20:
case 2590:
case 3040:
case 3362:
case 3393:
case 3757:
case 3617:
case 16:
case 1018:
case 2589:
case 903:
case 2671:
case 2484:
case 3333:
case 2878:
case 2149:
case 263:
case 2612:
case 579:
case 1241:
case 2752:
case 1701:
case 408:
case 1133:
case 238:
case 533:
case 678:
case 1077:
case 2206:
case 2124:
case 383:
case 4058:
case 3793:
case 47:
case 2358:
case 1307:
case 2745:
case 4061:
case 1151:
case 60:
case 2361:
case 3523:
case 3101:
case 4020:
case 3733:
case 2320:
case 2210:
case 809:
case 3357:
case 3672:
case 3025:
case 539:
case 1265:
case 2496:
case 3768:
case 2677:
case 1162:
case 389:
case 544:
case 3938:
case 3111:
case 1783:
case 2489:
case 2997:
case 988:
case 2535:
case 1662:
case 2725:
case 1024:
case 81:
case 3992:
case 1846:
case 3172:
case 3963:
case 1778:
case 3601:
case 1651:
case 3932:
case 3802:
case 3183:
case 2326:
case 1668:
case 542:
case 4026:
case 33:
case 1227:
case 3543:
case 1861:
case 4040:
case 2624:
case 2093:
case 2062:
case 697:
case 619:
case 1633:
case 2937:
case 2215:
case 2057:
case 2112:
case 518:
case 213:
case 2991:
case 3117:
case 1378:
case 554:
case 3052:
case 2536:
case 483:
case 2931:
case 2801:
case 2118:
case 1867:
case 1311:
case 1049:
case 37:
case 91:
case 1717:
case 1372:
case 2254:
case 1657:
case 297:
case 1930:
case 1004:
case 766:
case 2705:
case 4010:
case 3513:
case 1989:
case 2310:
case 2220:
case 3621:
case 785:
case 3166:
case 2155:
case 1374:
case 655:
case 847:
case 3679:
case 2306:
case 3660:
case 3581:
case 228:
case 523:
case 356:
case 2827:
case 2261:
case 1170:
case 2076:
case 1169:
case 1766:
case 777:
case 2258:
case 2604:
case 1747:
case 3804:
case 1815:
case 2710:
case 1019:
case 2588:
case 4005:
case 3403:
case 2622:
case 1765:
case 1774:
case 1491:
case 2148:
case 2879:
case 551:
case 492:
case 2821:
case 2109:
case 1431:
case 700:
case 2706:
case 1675:
case 42:
case 3174:
case 3262:
case 2142:
case 2748:
case 2876:
case 2600:
case 3050:
case 457:
case 3854:
case 1293:
case 1994:
case 4055:
case 1262:
case 1174:
case 2355:
case 347:
case 3453:
case 1165:
case 3431:
case 3675:
case 1016:
case 3664:
case 856:
case 2742:
case 1370:
case 3491:
case 3341:
case 3765:
case 2314:
case 1403:
case 2923:
case 2224:
case 3028:
case 3019:
case 4014:
case 3815:
case 1804:
case 894:
case 1934:
case 1985:
case 3207:
case 1054:
case 3169:
case 3766:
case 2498:
case 3990:
case 994:
case 2348:
case 156:
case 3437:
case 2021:
case 3816:
case 793:
case 1581:
case 241:
case 3374:
case 545:
case 3741:
case 1166:
case 2079:
case 2463:
case 2356:
case 799:
case 194:
case 1770:
case 2060:
case 956:
case 1621:
case 4042:
case 1828:
case 3800:
case 3676:
case 2309:
case 2714:
case 4009:
case 50:
case 1058:
case 2007:
case 3657:
case 3845:
case 17:
case 3717:
case 2599:
case 2344:
case 2862:
case 2893:
case 3049:
case 3221:
case 3867:
case 3311:
case 108:
case 252:
case 633:
case 569:
case 3002:
case 279:
case 644:
case 1052:
case 3279:
case 495:
case 2851:
case 1117:
case 31:
case 1046:
case 2434:
case 1020:
case 908:
case 2580:
case 2718:
case 2833:
case 2729:
case 2658:
case 2250:
case 1849:
case 3772:
case 3317:
case 13:
case 3861:
case 1543:
case 3227:
case 74:
case 2222:
case 652:
case 388:
case 4012:
case 1067:
case 2777:
case 782:
case 403:
case 2001:
case 1601:
case 3852:
case 244:
case 1992:
case 668:
case 3846:
case 1963:
case 1264:
case 239:
case 93:
case 1275:
case 409:
case 991:
case 4029:
case 3693:
case 3662:
case 1111:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1754550001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,];
var gg_b = "1754550001/";

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
