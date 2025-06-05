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
var o = 1;
switch (g) {
case 3817:
case 952:
case 1984:
case 3053:
case 3718:
case 453:
case 3291:
case 1560:
case 1021:
case 3015:
case 700:
case 2453:
case 2159:
case 3582:
case 1413:
case 2524:
case 2348:
case 733:
case 184:
case 3828:
case 3202:
case 3593:
case 849:
case 1610:
case 1455:
case 2743:
case 4049:
case 3224:
case 2311:
case 2282:
case 2394:
case 3952:
case 1295:
case 2843:
case 2664:
case 1351:
case 3323:
case 2051:
case 3025:
case 1845:
case 241:
case 1094:
case 1270:
case 1532:
case 2591:
case 966:
case 1129:
case 3741:
case 81:
case 1554:
case 3674:
case 939:
case 636:
case 3940:
case 3934:
case 3164:
case 5:
case 917:
case 1656:
case 2425:
case 3576:
case 301:
case 1080:
case 1228:
case 691:
case 324:
case 1866:
case 3971:
case 1802:
case 503:
case 3795:
case 2462:
case 587:
case 1543:
case 44:
case 530:
case 389:
case 2185:
case 3770:
case 2406:
case 2072:
case 3098:
case 2380:
case 1241:
case 3336:
case 1101:
case 2131:
case 1678:
case 4073:
case 163:
case 2854:
case 3472:
case 2257:
case 260:
case 3987:
case 3062:
case 1891:
case 2908:
case 3988:
case 1339:
case 419:
case 2879:
case 2907:
case 1167:
case 2086:
case 1937:
case 2497:
case 4061:
case 1975:
case 2860:
case 1009:
case 1677:
case 1400:
case 1386:
case 2605:
case 480:
case 2444:
case 39:
case 1681:
case 3300:
case 3869:
case 3486:
case 577:
case 3870:
case 254:
case 757:
case 379:
case 1824:
case 3439:
case 1766:
case 3030:
case 3044:
case 3895:
case 1227:
case 2146:
case 2206:
case 1236:
case 42:
case 1509:
case 3341:
case 3919:
case 3855:
case 2821:
case 3317:
case 1289:
case 638:
case 3272:
case 2711:
case 2794:
case 4:
case 1417:
case 3544:
case 783:
case 415:
case 3530:
case 99:
case 707:
case 204:
case 2848:
case 2122:
case 3723:
case 746:
case 1441:
case 2910:
case 3184:
case 2230:
case 2748:
case 3598:
case 1140:
case 1134:
case 1345:
case 2343:
case 1418:
case 1580:
case 1649:
case 2811:
case 3929:
case 4010:
case 3318:
case 2721:
case 643:
case 924:
case 3506:
case 2920:
case 3058:
case 686:
case 3445:
case 2956:
case 2066:
case 580:
case 339:
case 935:
case 2880:
case 665:
case 2476:
case 901:
case 3414:
case 1366:
case 1255:
case 1391:
case 829:
case 1314:
case 351:
case 3076:
case 267:
case 1661:
case 764:
case 3992:
case 2978:
case 2638:
case 1054:
case 1213:
case 4077:
case 884:
case 2091:
case 1786:
case 3836:
case 190:
case 2253:
case 1079:
case 1607:
case 1470:
case 3515:
case 1060:
case 221:
case 2637:
case 2199:
case 487:
case 54:
case 1163:
case 4078:
case 3553:
case 2360:
case 2809:
case 2977:
case 2482:
case 2690:
case 3789:
case 1905:
case 3424:
case 2379:
case 902:
case 3093:
case 3395:
case 2981:
case 1548:
case 3967:
case 3370:
case 2780:
case 3699:
case 3175:
case 2024:
case 3369:
case 3800:
case 1223:
case 65:
case 3911:
case 2352:
case 1925:
case 3404:
case 838:
case 1281:
case 697:
case 3947:
case 2923:
case 3158:
case 432:
case 1052:
case 572:
case 1618:
case 2004:
case 2585:
case 2233:
case 191:
case 1034:
case 1040:
case 2658:
case 3820:
case 1143:
case 4055:
case 1449:
case 1203:
case 2145:
case 2205:
case 1759:
case 2340:
case 2334:
case 1235:
case 1304:
case 350:
case 3412:
case 1583:
case 739:
case 1322:
case 1859:
case 1915:
case 3533:
case 1641:
case 2819:
case 405:
case 1953:
case 214:
case 582:
case 3720:
case 2022:
case 431:
case 886:
case 3084:
case 948:
case 3810:
case 2046:
case 192:
case 3948:
case 3157:
case 2729:
case 2484:
case 3231:
case 3499:
case 3307:
case 3542:
case 2792:
case 3274:
case 3778:
case 4036:
case 629:
case 3835:
case 1519:
case 1256:
case 3373:
case 3075:
case 3037:
case 23:
case 2559:
case 3465:
case 1088:
case 373:
case 188:
case 1220:
case 1473:
case 1179:
case 1063:
case 2490:
case 1365:
case 1670:
case 2701:
case 2363:
case 1399:
case 3550:
case 413:
case 785:
case 1407:
case 56:
case 1731:
case 912:
case 2693:
case 169:
case 3176:
case 2438:
case 2801:
case 555:
case 1831:
case 136:
case 1071:
case 206:
case 85:
case 3602:
case 2767:
case 3980:
case 2250:
case 744:
case 3666:
case 2166:
case 2883:
case 1132:
case 3691:
case 3614:
case 1496:
case 3703:
case 2574:
case 178:
case 1906:
case 2242:
case 3038:
case 2892:
case 2989:
case 346:
case 3308:
case 645:
case 509:
case 3777:
case 768:
case 531:
case 3849:
case 256:
case 2625:
case 1456:
case 482:
case 1623:
case 1746:
case 1812:
case 888:
case 3943:
case 3064:
case 79:
case 2329:
case 2852:
case 3299:
case 311:
case 261:
case 2237:
case 2918:
case 1804:
case 559:
case 1207:
case 779:
case 1147:
case 1374:
case 357:
case 2834:
case 2290:
case 2151:
case 2074:
case 471:
case 3320:
case 4017:
case 2464:
case 4018:
case 2450:
case 61:
case 2426:
case 1019:
case 532:
case 3537:
case 3575:
case 1410:
case 2941:
case 869:
case 1208:
case 1704:
case 312:
case 2319:
case 2740:
case 2734:
case 2238:
case 15:
case 789:
case 1613:
case 3590:
case 1359:
case 1712:
case 326:
case 3153:
case 3459:
case 2928:
case 262:
case 2752:
case 3050:
case 2442:
case 1121:
case 3749:
case 1296:
case 3115:
case 2522:
case 3639:
case 3761:
case 138:
case 634:
case 3377:
case 3335:
case 3960:
case 3204:
case 3708:
case 3130:
case 208:
case 3807:
case 1600:
case 2995:
case 409:
case 1982:
case 2863:
case 2630:
case 891:
case 1067:
case 1899:
case 2405:
case 735:
case 2970:
case 1865:
case 2139:
case 2433:
case 2969:
case 3796:
case 928:
case 1001:
case 3672:
case 4095:
case 1552:
case 3896:
case 2512:
case 4070:
case 3932:
case 4069:
case 2763:
case 1478:
case 3431:
case 1636:
case 1180:
case 46:
case 1083:
case 2662:
case 2887:
case 2284:
case 2392:
case 2606:
case 596:
case 3378:
case 3707:
case 1540:
case 1689:
case 333:
case 702:
case 27:
case 1092:
case 498:
case 2504:
case 3773:
case 2383:
case 2172:
case 73:
case 3894:
case 3343:
case 687:
case 3297:
case 603:
case 3847:
case 2598:
case 3572:
case 3104:
case 172:
case 3748:
case 2604:
case 3956:
case 1753:
case 3112:
case 1640:
case 1589:
case 285:
case 3920:
case 4019:
case 2713:
case 1974:
case 1358:
case 1209:
case 1443:
case 1536:
case 45:
case 2318:
case 2562:
case 1959:
case 1041:
case 918:
case 706:
case 465:
case 1357:
case 1853:
case 2341:
case 954:
case 2622:
case 1017:
case 896:
case 3206:
case 813:
case 3684:
case 2723:
case 2597:
case 2184:
case 4029:
case 3747:
case 182:
case 1280:
case 304:
case 2544:
case 2530:
case 2272:
case 3457:
case 1725:
case 2424:
case 2789:
case 4083:
case 3482:
case 16:
case 3935:
case 2553:
case 3199:
case 694:
case 321:
case 1706:
case 2515:
case 1095:
case 588:
case 2800:
case 2369:
case 805:
case 2175:
case 3024:
case 1844:
case 2967:
case 1830:
case 2082:
case 1798:
case 486:
case 1070:
case 831:
case 252:
case 1479:
case 795:
case 3981:
case 2190:
case 1069:
case 3225:
case 2093:
case 1897:
case 109:
case 1454:
case 476:
case 1898:
case 2901:
case 1523:
case 720:
case 62:
case 2414:
case 2138:
case 3476:
case 3002:
case 266:
case 2525:
case 3551:
case 1248:
case 1730:
case 322:
case 3066:
case 239:
case 2983:
case 3253:
case 1376:
case 3014:
case 941:
case 3091:
case 615:
case 6:
case 393:
case 1806:
case 3638:
case 2992:
case 1432:
case 2889:
case 2466:
case 2076:
case 1221:
case 569:
case 619:
case 3949:
case 1629:
case 993:
case 86:
case 3502:
case 3347:
case 3051:
case 2323:
case 2827:
case 2116:
case 1023:
case 1120:
case 3311:
case 967:
case 2952:
case 3394:
case 3282:
case 159:
case 2224:
case 201:
case 1260:
case 3425:
case 1904:
case 2451:
case 1279:
case 105:
case 1494:
case 2674:
case 235:
case 922:
case 1447:
case 131:
case 423:
case 491:
case 2659:
case 342:
case 1448:
case 1353:
case 1055:
case 809:
case 3276:
case 4034:
case 2841:
case 2150:
case 2053:
case 1758:
case 1254:
case 2817:
case 1922:
case 1421:
case 2142:
case 2593:
case 670:
case 1570:
case 3415:
case 2828:
case 202:
case 3524:
case 132:
case 4052:
case 3159:
case 1517:
case 29:
case 1181:
case 904:
case 4087:
case 3605:
case 3039:
case 1776:
case 3973:
case 872:
case 3860:
case 1541:
case 3086:
case 3907:
case 3879:
case 3258:
case 2988:
case 576:
case 1000:
case 1103:
case 469:
case 2895:
case 1409:
case 1667:
case 1882:
case 436:
case 1999:
case 1177:
case 1135:
case 279:
case 354:
case 2870:
case 1965:
case 761:
case 2105:
case 2245:
case 2486:
case 3072:
case 3406:
case 2770:
case 1601:
case 3380:
case 2769:
case 2631:
case 3996:
case 3462:
case 1527:
case 2795:
case 3545:
case 196:
case 727:
case 224:
case 1782:
case 1398:
case 3832:
case 871:
case 40:
case 882:
case 2062:
case 3760:
case 1683:
case 3498:
case 586:
case 2389:
case 3779:
case 1089:
case 1306:
case 1692:
case 762:
case 1480:
case 488:
case 543:
case 2685:
case 4088:
case 2336:
case 3917:
case 2590:
case 3740:
case 584:
case 3319:
case 1287:
case 212:
case 1573:
case 529:
case 3426:
case 1621:
case 3450:
case 1507:
case 1342:
case 3059:
case 3615:
case 1326:
case 760:
case 93:
case 819:
case 880:
case 3752:
case 194:
case 2153:
case 3565:
case 3928:
case 2459:
case 1010:
case 1271:
case 837:
case 1419:
case 2026:
case 1113:
case 698:
case 2474:
case 870:
case 1263:
case 3852:
case 3329:
case 434:
case 3927:
case 2651:
case 1611:
case 3416:
case 906:
case 3464:
case 1508:
case 2320:
case 3290:
case 947:
case 3074:
case 1561:
case 257:
case 2016:
case 3840:
case 1784:
case 1020:
case 3918:
case 1056:
case 3275:
case 361:
case 1492:
case 2106:
case 2246:
case 3871:
case 597:
case 340:
case 3512:
case 1189:
case 1483:
case 2896:
case 399:
case 3698:
case 2198:
case 3172:
case 3504:
case 1468:
case 2773:
case 130:
case 3383:
case 37:
case 4060:
case 233:
case 103:
case 2707:
case 3606:
case 3392:
case 3284:
case 3788:
case 2378:
case 1401:
case 3887:
case 1775:
case 200:
case 1991:
case 2431:
case 672:
case 1914:
case 1234:
case 1305:
case 308:
case 2807:
case 2686:
case 2130:
case 2708:
case 2033:
case 741:
case 1035:
case 449:
case 2873:
case 1077:
case 1609:
case 4054:
case 2761:
case 177:
case 2303:
case 2639:
case 2197:
case 490:
case 38:
case 3522:
case 3969:
case 4032:
case 1081:
case 853:
case 3367:
case 3970:
case 958:
case 671:
case 3186:
case 3995:
case 2381:
case 2212:
case 2505:
case 1842:
case 3022:
case 2720:
case 314:
case 3955:
case 2446:
case 2533:
case 1503:
case 722:
case 1292:
case 1384:
case 2231:
case 908:
case 1141:
case 3729:
case 793:
case 767:
case 2157:
case 1850:
case 2948:
case 1117:
case 1581:
case 1826:
case 1268:
case 445:
case 803:
case 3046:
case 97:
case 2158:
case 2710:
case 2947:
case 429:
case 1864:
case 2645:
case 484:
case 1951:
case 1049:
case 1440:
case 3352:
case 2994:
case 1452:
case 3334:
case 3145:
case 395:
case 613:
case 4021:
case 999:
case 3658:
case 3233:
case 347:
case 2666:
case 3767:
case 3250:
case 3868:
case 605:
case 2602:
case 1096:
case 2781:
case 3371:
case 961:
case 1487:
case 2176:
case 1972:
case 3801:
case 631:
case 1556:
case 2735:
case 3676:
case 2308:
case 1471:
case 2259:
case 1061:
case 3892:
case 3242:
case 3102:
case 3574:
case 2361:
case 137:
case 283:
case 1008:
case 894:
case 3936:
case 956:
case 659:
case 180:
case 3883:
case 1679:
case 273:
case 3216:
case 815:
case 3559:
case 8:
case 170:
case 3124:
case 2373:
case 1660:
case 2075:
case 632:
case 1337:
case 1375:
case 463:
case 2909:
case 1073:
case 1169:
case 1463:
case 1805:
case 1939:
case 962:
case 2307:
case 2193:
case 3437:
case 3693:
case 82:
case 2550:
case 3363:
case 3701:
case 14:
case 3682:
case 3490:
case 3099:
case 3900:
case 3768:
case 3264:
case 525:
case 765:
case 2135:
case 1870:
case 406:
case 2330:
case 2528:
case 2965:
case 1245:
case 58:
case 1869:
case 3681:
case 885:
case 3227:
case 2000:
case 2397:
case 2103:
case 508:
case 2409:
case 2667:
case 2882:
case 1030:
case 1963:
case 1439:
case 3766:
case 1133:
case 3975:
case 2541:
case 3339:
case 1988:
case 19:
case 2517:
case 2776:
case 1557:
case 3386:
case 3009:
case 3635:
case 3677:
case 397:
case 2089:
case 2306:
case 2692:
case 3678:
case 2480:
case 2362:
case 2518:
case 43:
case 1336:
case 2036:
case 3814:
case 1472:
case 363:
case 3217:
case 628:
case 1795:
case 213:
case 296:
case 4065:
case 3724:
case 110:
case 3228:
case 3866:
case 124:
case 2782:
case 3372:
case 1770:
case 1098:
case 189:
case 3543:
case 844:
case 1631:
case 3436:
case 2793:
case 1674:
case 420:
case 414:
case 852:
case 776:
case 3423:
case 4022:
case 2447:
case 231:
case 2260:
case 101:
case 1576:
case 2757:
case 3656:
case 2904:
case 1451:
case 1717:
case 2279:
case 2411:
case 1940:
case 1934:
case 3351:
case 1827:
case 2023:
case 1116:
case 2120:
case 3047:
case 1952:
case 259:
case 738:
case 0:
case 1224:
case 3094:
case 2629:
case 3011:
case 949:
case 1323:
case 990:
case 3269:
case 1025:
case 4012:
case 232:
case 925:
case 329:
case 851:
case 3413:
case 3745:
case 3455:
case 2421:
case 1202:
case 2946:
case 1727:
case 1142:
case 3610:
case 384:
case 1266:
case 3048:
case 2232:
case 102:
case 1150:
case 1718:
case 562:
case 1214:
case 839:
case 1355:
case 2857:
case 2254:
case 2013:
case 866:
case 2922:
case 1015:
case 1659:
case 4004:
case 3021:
case 2353:
case 2055:
case 786:
case 1841:
case 2798:
case 2070:
case 1665:
case 2211:
case 3772:
case 152:
case 3548:
case 2479:
case 2069:
case 791:
case 1395:
case 2460:
case 499:
case 1699:
case 440:
case 4031:
case 801:
case 2830:
case 1082:
case 3469:
case 3163:
case 2706:
case 626:
case 3470:
case 1515:
case 3079:
case 4085:
case 298:
case 3607:
case 325:
case 1424:
case 3839:
case 3905:
case 1789:
case 984:
case 26:
case 2513:
case 3673:
case 1553:
case 3661:
case 3391:
case 1402:
case 1076:
case 3314:
case 2221:
case 3255:
case 802:
case 3786:
case 506:
case 2806:
case 3054:
case 1138:
case 1525:
case 1968:
case 2744:
case 2248:
case 3032:
case 209:
case 3366:
case 2898:
case 3872:
case 117:
case 2931:
case 1414:
case 3696:
case 3302:
case 1506:
case 1239:
case 2974:
case 2536:
case 1318:
case 3427:
case 1286:
case 3152:
case 2018:
case 1445:
case 2753:
case 2589:
case 3916:
case 185:
case 3345:
case 3964:
case 3140:
case 2027:
case 3134:
case 868:
case 600:
case 70:
case 997:
case 963:
case 1929:
case 788:
case 3649:
case 2825:
case 462:
case 89:
case 3417:
case 778:
case 1272:
case 2725:
case 558:
case 3751:
case 1723:
case 1597:
case 1184:
case 3950:
case 514:
case 2028:
case 1057:
case 810:
case 1341:
case 3509:
case 769:
case 1813:
case 1622:
case 2017:
case 3942:
case 1317:
case 2815:
case 1919:
case 2357:
case 1703:
case 237:
case 183:
case 1614:
case 280:
case 4039:
case 3962:
case 3087:
case 2556:
case 1777:
case 219:
case 1735:
case 146:
case 1516:
case 4086:
case 1878:
case 3831:
case 2096:
case 3408:
case 635:
case 2487:
case 567:
case 965:
case 1176:
case 418:
case 601:
case 812:
case 2632:
case 593:
case 3071:
case 1396:
case 1602:
case 3944:
case 3063:
case 24:
case 3365:
case 521:
case 3160:
case 4072:
case 3695:
case 3997:
case 3669:
case 1550:
case 2229:
case 3785:
case 1877:
case 1835:
case 1909:
case 1090:
case 2463:
case 1499:
case 2805:
case 1542:
case 1307:
case 3220:
case 173:
case 2195:
case 1465:
case 270:
case 1373:
case 1037:
case 1075:
case 1182:
case 811:
case 441:
case 164:
case 1157:
case 2850:
case 938:
case 800:
case 2117:
case 2826:
case 668:
case 2764:
case 1231:
case 790:
case 2141:
case 1422:
case 1285:
case 679:
case 1921:
case 1446:
case 3641:
case 1533:
case 3322:
case 3278:
case 2292:
case 1505:
case 1084:
case 3617:
case 1756:
case 2577:
case 504:
case 3143:
case 3592:
case 128:
case 2578:
case 3203:
case 3449:
case 3034:
case 1856:
case 442:
case 1412:
case 150:
case 3304:
case 3583:
case 3235:
case 986:
case 3874:
case 2452:
case 3759:
case 1645:
case 3568:
case 3281:
case 2951:
case 2440:
case 1911:
case 2434:
case 1994:
case 2750:
case 2118:
case 2726:
case 2643:
case 1222:
case 1707:
case 2838:
case 1954:
case 1378:
case 2401:
case 3083:
case 2737:
case 100:
case 2991:
case 864:
case 2914:
case 3180:
case 3636:
case 3092:
case 3689:
case 287:
case 3540:
case 133:
case 3534:
case 4024:
case 2189:
case 1896:
case 3552:
case 343:
case 3001:
case 1672:
case 1932:
case 2680:
case 2136:
case 2549:
case 3799:
case 560:
case 2966:
case 3331:
case 1106:
case 1246:
case 685:
case 2252:
case 3067:
case 675:
case 3477:
case 1381:
case 1212:
case 1796:
case 644:
case 4066:
case 923:
case 3865:
case 3249:
case 148:
case 1873:
case 2077:
case 2609:
case 2333:
case 416:
case 554:
case 1761:
case 277:
case 1639:
case 992:
case 1197:
case 1005:
case 4091:
case 2890:
case 2100:
case 2305:
case 1979:
case 745:
case 3481:
case 1708:
case 1033:
case 2837:
case 467:
case 2648:
case 4045:
case 1153:
case 90:
case 1459:
case 797:
case 126:
case 883:
case 2419:
case 1026:
case 2113:
case 542:
case 3296:
case 1310:
case 2155:
case 763:
case 1749:
case 1575:
case 3410:
case 3655:
case 2621:
case 3019:
case 2342:
case 3588:
case 3261:
case 3822:
case 3613:
case 1042:
case 2287:
case 3208:
case 2561:
case 1016:
case 157:
case 2123:
case 3374:
case 3958:
case 3207:
case 2056:
case 639:
case 2508:
case 3194:
case 1538:
case 1320:
case 617:
case 1125:
case 2316:
case 1651:
case 404:
case 2945:
case 3571:
case 978:
case 3420:
case 1849:
case 1474:
case 2263:
case 1064:
case 2:
case 3746:
case 873:
case 1638:
case 2054:
case 2171:
case 2213:
case 3376:
case 1091:
case 2608:
case 3862:
case 4005:
case 1253:
case 3221:
case 1709:
case 2391:
case 167:
case 2661:
case 4033:
case 959:
case 656:
case 355:
case 3797:
case 3161:
case 3523:
case 507:
case 3454:
case 1332:
case 546:
case 905:
case 2872:
case 2366:
case 1066:
case 2511:
case 2594:
case 661:
case 3744:
case 1880:
case 122:
case 1551:
case 931:
case 3844:
case 3830:
case 3663:
case 2188:
case 3247:
case 573:
case 3107:
case 3393:
case 3460:
case 627:
case 21:
case 1225:
case 3069:
case 2324:
case 3479:
case 2548:
case 3294:
case 3211:
case 1935:
case 1977:
case 1482:
case 3513:
case 2839:
case 400:
case 2079:
case 2607:
case 398:
case 2470:
case 3706:
case 2060:
case 121:
case 1637:
case 1493:
case 3555:
case 2163:
case 2886:
case 2521:
case 104:
case 860:
case 382:
case 1848:
case 2926:
case 719:
case 1910:
case 2441:
case 2751:
case 1457:
case 1298:
case 234:
case 2417:
case 1586:
case 3041:
case 4016:
case 2428:
case 3815:
case 2289:
case 1539:
case 1684:
case 1206:
case 2942:
case 2509:
case 371:
case 1262:
case 3589:
case 3640:
case 1112:
case 3634:
case 818:
case 381:
case 1956:
case 3018:
case 3443:
case 3209:
case 3149:
case 3536:
case 699:
case 996:
case 74:
case 3358:
case 640:
case 3715:
case 770:
case 67:
case 4050:
case 2851:
case 4026:
case 2649:
case 550:
case 1894:
case 1458:
case 1230:
case 1748:
case 1572:
case 2134:
case 2200:
case 528:
case 2043:
case 2964:
case 1847:
case 2168:
case 1779:
case 2217:
case 1498:
case 2938:
case 3683:
case 2891:
case 1908:
case 2814:
case 4090:
case 3876:
case 2101:
case 3518:
case 3362:
case 3692:
case 1131:
case 972:
case 4075:
case 297:
case 794:
case 3089:
case 3527:
case 533:
case 2192:
case 2543:
case 981:
case 2436:
case 1072:
case 1832:
case 3782:
case 2372:
case 2724:
case 500:
case 2866:
case 1545:
case 396:
case 2802:
case 695:
case 614:
case 2824:
case 3999:
case 620:
case 2766:
case 3103:
case 2227:
case 2702:
case 3344:
case 3528:
case 3135:
case 483:
case 1973:
case 2009:
case 715:
case 2677:
case 548:
case 2400:
case 1039:
case 3517:
case 1258:
case 1754:
case 2603:
case 2167:
case 1086:
case 2937:
case 1497:
case 2975:
case 407:
case 1633:
case 1860:
case 2048:
case 3232:
case 284:
case 787:
case 3946:
case 63:
case 893:
case 2610:
case 1743:
case 730:
case 2745:
case 1159:
case 3595:
case 2119:
case 2413:
case 998:
case 1348:
case 1276:
case 2560:
case 3353:
case 3055:
case 428:
case 142:
case 2579:
case 3315:
case 3922:
case 526:
case 3254:
case 2984:
case 3857:
case 1321:
case 606:
case 647:
case 3260:
case 511:
case 3447:
case 2129:
case 4084:
case 1051:
case 2269:
case 2845:
case 464:
case 1502:
case 141:
case 2094:
case 2011:
case 3629:
case 1566:
case 955:
case 274:
case 821:
case 1311:
case 1282:
case 359:
case 1664:
case 557:
case 3912:
case 3023:
case 2351:
case 705:
case 2109:
case 466:
case 1367:
case 439:
case 1546:
case 1697:
case 1433:
case 895:
case 276:
case 731:
case 2435:
case 1995:
case 568:
case 2477:
case 3252:
case 2982:
case 1186:
case 1630:
case 2067:
case 417:
case 3837:
case 3875:
case 1787:
case 604:
case 2481:
case 108:
case 3305:
case 451:
case 4076:
case 1888:
case 3100:
case 3077:
case 579:
case 3333:
case 3609:
case 2689:
case 2534:
case 17:
case 3078:
case 2092:
case 1085:
case 1504:
case 3468:
case 2976:
case 2083:
case 510:
case 2385:
case 1392:
case 3838:
case 1606:
case 3401:
case 732:
case 2068:
case 1871:
case 286:
case 3902:
case 2799:
case 3966:
case 3492:
case 3549:
case 1301:
case 3680:
case 1698:
case 243:
case 2552:
case 4082:
case 1031:
case 1368:
case 140:
case 858:
case 1290:
case 3316:
case 4057:
case 2111:
case 3508:
case 1464:
case 444:
case 1275:
case 161:
case 1237:
case 265:
case 2207:
case 2147:
case 2722:
case 3020:
case 3123:
case 3561:
case 2958:
case 3429:
case 1834:
case 3784:
case 1927:
case 919:
case 83:
case 315:
case 693:
case 2420:
case 937:
case 3611:
case 1416:
case 667:
case 2571:
case 2456:
case 1599:
case 1442:
case 2121:
case 2296:
case 3419:
case 3271:
case 1928:
case 1565:
case 162:
case 3648:
case 2208:
case 847:
case 2704:
case 1319:
case 3287:
case 2957:
case 1740:
case 25:
case 2613:
case 2359:
case 2822:
case 2588:
case 1615:
case 1450:
case 3342:
case 3507:
case 1426:
case 2019:
case 796:
case 1065:
case 2670:
case 3229:
case 1363:
case 2399:
case 2407:
case 1437:
case 781:
case 424:
case 1475:
case 410:
case 2473:
case 2695:
case 1900:
case 1099:
case 2160:
case 34:
case 2063:
case 861:
case 1490:
case 2930:
case 2365:
case 2256:
case 1124:
case 3660:
case 3833:
case 1783:
case 13:
case 1216:
case 1559:
case 2088:
case 3007:
case 288:
case 4062:
case 1792:
case 1388:
case 3463:
case 772:
case 3375:
case 552:
case 3073:
case 2785:
case 3338:
case 1892:
case 782:
case 517:
case 3705:
case 915:
case 3556:
case 319:
case 2885:
case 380:
case 3008:
case 49:
case 1936:
case 2496:
case 337:
case 1574:
case 2906:
case 3654:
case 2210:
case 479:
case 1226:
case 1114:
case 147:
case 2998:
case 1438:
case 1801:
case 3972:
case 4044:
case 4030:
case 1205:
case 2759:
case 1340:
case 353:
case 2304:
case 2583:
case 2618:
case 1585:
case 1233:
case 291:
case 3742:
case 3127:
case 2040:
case 2592:
case 195:
case 2203:
case 3726:
case 3864:
case 808:
case 2627:
case 1012:
case 660:
case 2501:
case 3750:
case 2052:
case 3267:
case 76:
case 3440:
case 903:
case 798:
case 3951:
case 2281:
case 88:
case 1729:
case 1484:
case 544:
case 87:
case 1046:
case 3826:
case 3117:
case 575:
case 3268:
case 3764:
case 977:
case 3850:
case 292:
case 114:
case 3128:
case 1657:
case 435:
case 3535:
case 1022:
case 709:
case 618:
case 3842:
case 158:
case 2915:
case 401:
case 899:
case 2641:
case 1819:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1749132001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,];
var gg_b = "1749132001/";

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
