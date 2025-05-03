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
case 3604:
case 2320:
case 3838:
case 2956:
case 2084:
case 1611:
case 744:
case 2467:
case 3088:
case 674:
case 3559:
case 1163:
case 1606:
case 947:
case 3241:
case 3302:
case 975:
case 706:
case 2047:
case 1639:
case 2077:
case 2618:
case 425:
case 3271:
case 3614:
case 2092:
case 3669:
case 3312:
case 645:
case 1616:
case 2951:
case 3835:
case 510:
case 4002:
case 206:
case 458:
case 3925:
case 851:
case 2605:
case 3762:
case 1390:
case 1994:
case 1955:
case 1418:
case 2439:
case 1982:
case 2615:
case 275:
case 511:
case 2406:
case 509:
case 3991:
case 2817:
case 37:
case 1496:
case 1673:
case 3149:
case 467:
case 1531:
case 2914:
case 1621:
case 1842:
case 3494:
case 1564:
case 2310:
case 2349:
case 3322:
case 3482:
case 1509:
case 3213:
case 2379:
case 1654:
case 3100:
case 3745:
case 464:
case 3908:
case 3179:
case 125:
case 3656:
case 1897:
case 1570:
case 3534:
case 3561:
case 2904:
case 1491:
case 3186:
case 1428:
case 3:
case 2443:
case 3778:
case 2386:
case 2454:
case 3458:
case 852:
case 863:
case 158:
case 2774:
case 2063:
case 3915:
case 1192:
case 3507:
case 2937:
case 683:
case 1698:
case 692:
case 3748:
case 2381:
case 1177:
case 4022:
case 733:
case 2760:
case 2473:
case 2696:
case 2910:
case 1735:
case 3571:
case 1116:
case 3318:
case 1553:
case 1587:
case 455:
case 1096:
case 1862:
case 1544:
case 3114:
case 114:
case 2369:
case 1139:
case 3308:
case 1574:
case 1091:
case 1106:
case 3765:
case 2979:
case 2602:
case 1663:
case 1229:
case 1650:
case 3832:
case 3576:
case 3104:
case 3541:
case 282:
case 2813:
case 1738:
case 993:
case 2986:
case 2026:
case 2054:
case 54:
case 3589:
case 3058:
case 2770:
case 1167:
case 2095:
case 48:
case 2709:
case 2115:
case 4018:
case 2736:
case 3137:
case 2299:
case 2731:
case 3305:
case 793:
case 821:
case 782:
case 189:
case 2337:
case 2740:
case 2105:
case 2981:
case 778:
case 632:
case 560:
case 1236:
case 3124:
case 414:
case 2447:
case 352:
case 1358:
case 3679:
case 1209:
case 3234:
case 1154:
case 1270:
case 704:
case 3328:
case 2238:
case 1195:
case 3503:
case 707:
case 281:
case 2351:
case 1121:
case 605:
case 2871:
case 2477:
case 2846:
case 3151:
case 1231:
case 2783:
case 904:
case 3610:
case 2757:
case 18:
case 1394:
case 3681:
case 630:
case 553:
case 1018:
case 1677:
case 4028:
case 3396:
case 780:
case 1875:
case 3325:
case 3485:
case 3452:
case 1008:
case 2011:
case 1684:
case 3772:
case 128:
case 1647:
case 207:
case 2191:
case 2889:
case 2444:
case 783:
case 792:
case 708:
case 2721:
case 1183:
case 2881:
case 811:
case 2453:
case 418:
case 2327:
case 3237:
case 3068:
case 3689:
case 908:
case 992:
case 1728:
case 3478:
case 810:
case 1280:
case 2474:
case 551:
case 1888:
case 2795:
case 1674:
case 2208:
case 2359:
case 3445:
case 2879:
case 3641:
case 283:
case 3676:
case 1206:
case 1791:
case 3493:
case 292:
case 208:
case 2913:
case 2502:
case 465:
case 3646:
case 1201:
case 2849:
case 3671:
case 3475:
case 3623:
case 361:
case 1216:
case 2798:
case 3755:
case 1584:
case 2291:
case 2739:
case 2706:
case 1945:
case 3097:
case 3586:
case 1708:
case 1547:
case 2029:
case 1993:
case 823:
case 791:
case 499:
case 3042:
case 2307:
case 552:
case 3581:
case 2225:
case 3107:
case 3462:
case 1975:
case 274:
case 1718:
case 2296:
case 1164:
case 3251:
case 2833:
case 2083:
case 974:
case 2057:
case 777:
case 3166:
case 1140:
case 2971:
case 2946:
case 745:
case 3549:
case 675:
case 1368:
case 1119:
case 2138:
case 353:
case 1295:
case 290:
case 2632:
case 2780:
case 2522:
case 3161:
case 644:
case 2767:
case 2941:
case 3134:
case 1226:
case 1254:
case 3802:
case 2228:
case 3338:
case 1109:
case 1978:
case 1715:
case 2930:
case 3500:
case 2334:
case 1136:
case 945:
case 606:
case 3224:
case 3752:
case 3472:
case 439:
case 731:
case 2389:
case 1393:
case 2515:
case 2429:
case 1567:
case 3497:
case 3189:
case 1345:
case 1375:
case 2505:
case 3935:
case 730:
case 3896:
case 3537:
case 84:
case 1894:
case 13:
case 520:
case 276:
case 607:
case 3514:
case 1968:
case 976:
case 705:
case 3123:
case 2518:
case 154:
case 3146:
case 2457:
case 309:
case 1187:
case 2483:
case 1499:
case 3233:
case 1153:
case 231:
case 3659:
case 2508:
case 3938:
case 905:
case 3141:
case 2934:
case 646:
case 3828:
case 1511:
case 2747:
case 2961:
case 3220:
case 1629:
case 1263:
case 157:
case 230:
case 426:
case 2202:
case 2784:
case 3788:
case 604:
case 1174:
case 1250:
case 2431:
case 2837:
case 2464:
case 1712:
case 682:
case 2927:
case 1277:
case 2044:
case 513:
case 2440:
case 139:
case 2635:
case 849:
case 2525:
case 748:
case 732:
case 3078:
case 2750:
case 3617:
case 1438:
case 43:
case 2470:
case 2763:
case 853:
case 2409:
case 2436:
case 1526:
case 1609:
case 248:
case 115:
case 2222:
case 3332:
case 3808:
case 3524:
case 3556:
case 3200:
case 2638:
case 3113:
case 312:
case 1543:
case 3045:
case 454:
case 457:
case 3075:
case 3790:
case 126:
case 1435:
case 2303:
case 3666:
case 3551:
case 3249:
case 3103:
case 3210:
case 3818:
case 3188:
case 1495:
case 406:
case 3565:
case 3730:
case 1063:
case 624:
case 1050:
case 1426:
case 2184:
case 2388:
case 3967:
case 1443:
case 3776:
case 3020:
case 370:
case 1691:
case 3456:
case 3857:
case 1787:
case 3883:
case 3451:
case 1753:
case 3392:
case 2177:
case 329:
case 1535:
case 2012:
case 916:
case 3694:
case 1381:
case 1421:
case 2192:
case 1744:
case 3377:
case 3655:
case 1937:
case 216:
case 2531:
case 2564:
case 3901:
case 1310:
case 2842:
case 4084:
case 2385:
case 2673:
case 3262:
case 2540:
case 1300:
case 2897:
case 2491:
case 3789:
case 1904:
case 1122:
case 1628:
case 2643:
case 225:
case 1538:
case 2626:
case 3906:
case 3152:
case 1379:
case 2695:
case 2955:
case 3998:
case 3414:
case 964:
case 2390:
case 3010:
case 1401:
case 2557:
case 106:
case 767:
case 1599:
case 3469:
case 3275:
case 1416:
case 4050:
case 3190:
case 656:
case 3404:
case 2680:
case 2732:
case 3245:
case 764:
case 1406:
case 837:
case 147:
case 3363:
case 2415:
case 267:
case 69:
case 3809:
case 1467:
case 3943:
case 3278:
case 2163:
case 2274:
case 2150:
case 51:
case 1320:
case 1480:
case 2611:
case 1084:
case 618:
case 3819:
case 2616:
case 3248:
case 1092:
case 573:
case 3840:
case 3973:
case 502:
case 3081:
case 598:
case 3864:
case 3069:
case 2198:
case 1235:
case 836:
case 4054:
case 3194:
case 2875:
case 894:
case 2677:
case 2018:
case 3398:
case 1125:
case 3449:
case 2355:
case 4043:
case 1001:
case 1196:
case 657:
case 2990:
case 1191:
case 1889:
case 654:
case 3479:
case 4073:
case 228:
case 343:
case 1039:
case 2422:
case 897:
case 2647:
case 3004:
case 2845:
case 1729:
case 3400:
case 2684:
case 1011:
case 3652:
case 3874:
case 1067:
case 1238:
case 2195:
case 3158:
case 2154:
case 2126:
case 2270:
case 1484:
case 1920:
case 870:
case 1447:
case 3963:
case 2015:
case 1876:
case 2209:
case 1841:
case 2358:
case 2143:
case 928:
case 3326:
case 3354:
case 3486:
case 2236:
case 3481:
case 3321:
case 3853:
case 478:
case 2264:
case 1871:
case 3268:
case 3037:
case 98:
case 2173:
case 3860:
case 1846:
case 181:
case 2848:
case 1351:
case 3727:
case 266:
case 2219:
case 829:
case 3844:
case 1933:
case 3562:
case 728:
case 586:
case 404:
case 3367:
case 1736:
case 626:
case 3984:
case 3024:
case 3380:
case 3947:
case 3761:
case 1463:
case 714:
case 2402:
case 1986:
case 2738:
case 1450:
case 615:
case 717:
case 1740:
case 1337:
case 3766:
case 35:
case 1105:
case 4006:
case 914:
case 3051:
case 595:
case 1073:
case 3992:
case 3433:
case 3548:
case 214:
case 1612:
case 396:
case 2025:
case 989:
case 1803:
case 2096:
case 2544:
case 3707:
case 2553:
case 3242:
case 82:
case 1098:
case 1949:
case 540:
case 1314:
case 4080:
case 3306:
case 2650:
case 481:
case 1602:
case 1979:
case 3272:
case 337:
case 2229:
case 3339:
case 1304:
case 2574:
case 1900:
case 872:
case 385:
case 3297:
case 2952:
case 718:
case 2368:
case 2119:
case 3987:
case 2705:
case 543:
case 801:
case 2948:
case 2099:
case 3319:
case 3168:
case 3585:
case 492:
case 1057:
case 1366:
case 2164:
case 3944:
case 1833:
case 1930:
case 1361:
case 3974:
case 918:
case 1334:
case 265:
case 1228:
case 3863:
case 2226:
case 3336:
case 1138:
case 1780:
case 800:
case 1522:
case 1632:
case 3850:
case 2432:
case 2993:
case 2547:
case 2365:
case 342:
case 1711:
case 4019:
case 4040:
case 664:
case 887:
case 1317:
case 2945:
case 145:
case 218:
case 3588:
case 965:
case 2584:
case 1291:
case 4031:
case 174:
case 2718:
case 4036:
case 1296:
case 956:
case 1701:
case 4009:
case 3714:
case 667:
case 2298:
case 3255:
case 2890:
case 1716:
case 765:
case 3329:
case 227:
case 4083:
case 491:
case 3197:
case 802:
case 898:
case 1502:
case 4057:
case 108:
case 2550:
case 3017:
case 1208:
case 1800:
case 395:
case 2852:
case 386:
case 1798:
case 2885:
case 999:
case 3142:
case 81:
case 2035:
case 2962:
case 490:
case 2725:
case 2796:
case 1810:
case 2653:
case 224:
case 1218:
case 3007:
case 3751:
case 2157:
case 1327:
case 36:
case 537:
case 1064:
case 3877:
case 1031:
case 3590:
case 924:
case 477:
case 1460:
case 3423:
case 341:
case 4029:
case 727:
case 3892:
case 1444:
case 3061:
case 1070:
case 3034:
case 724:
case 1754:
case 3645:
case 474:
case 3847:
case 1743:
case 1036:
case 1886:
case 1009:
case 3693:
case 1215:
case 335:
case 3811:
case 1528:
case 2543:
case 689:
case 1132:
case 1804:
case 529:
case 3558:
case 842:
case 2972:
case 215:
case 1313:
case 3089:
case 739:
case 1222:
case 2636:
case 2554:
case 968:
case 3162:
case 3407:
case 2942:
case 3668:
case 2640:
case 1869:
case 768:
case 3816:
case 869:
case 3285:
case 1303:
case 2435:
case 2619:
case 570:
case 226:
case 1525:
case 1419:
case 1635:
case 301:
case 3983:
case 3023:
case 715:
case 617:
case 1596:
case 926:
case 3466:
case 1087:
case 2598:
case 319:
case 1053:
case 2277:
case 1431:
case 3733:
case 1060:
case 3594:
case 597:
case 1436:
case 915:
case 3076:
case 300:
case 3582:
case 1409:
case 476:
case 1470:
case 2702:
case 2284:
case 3461:
case 614:
case 1074:
case 3030:
case 3880:
case 1750:
case 2187:
case 1457:
case 3919:
case 1212:
case 841:
case 2153:
case 131:
case 1323:
case 2499:
case 3781:
case 1777:
case 2516:
case 3344:
case 3427:
case 3148:
case 503:
case 1792:
case 2501:
case 2858:
case 3936:
case 3895:
case 1376:
case 2174:
case 52:
case 2539:
case 3178:
case 2263:
case 68:
case 3672:
case 3909:
case 3970:
case 1961:
case 1508:
case 2378:
case 3786:
case 3697:
case 1856:
case 754:
case 895:
case 3459:
case 373:
case 3779:
case 666:
case 3013:
case 2965:
case 2032:
case 1429:
case 2393:
case 176:
case 2855:
case 4074:
case 3175:
case 23:
case 3749:
case 886:
case 1699:
case 31:
case 3003:
case 2657:
case 757:
case 2575:
case 2433:
case 2992:
case 3412:
case 3257:
case 996:
case 2766:
case 1227:
case 25:
case 2690:
case 934:
case 3180:
case 796:
case 1315:
case 2761:
case 985:
case 2367:
case 1259:
case 3139:
case 2297:
case 2311:
case 3106:
case 1620:
case 3574:
case 1922:
case 2339:
case 150:
case 619:
case 1576:
case 1832:
case 1546:
case 3116:
case 600:
case 1571:
case 3735:
case 2301:
case 3587:
case 1055:
case 3553:
case 2316:
case 3544:
case 3862:
case 3101:
case 296:
case 463:
case 452:
case 3025:
case 1633:
case 314:
case 1452:
case 825:
case 2688:
case 3845:
case 3382:
case 3647:
case 2265:
case 243:
case 2759:
case 3394:
case 38:
case 2449:
case 565:
case 2194:
case 259:
case 3198:
case 1485:
case 2155:
case 3692:
case 4082:
case 3219:
case 1912:
case 2373:
case 1503:
case 3848:
case 3173:
case 1649:
case 2887:
case 2481:
case 3231:
case 2853:
case 2321:
case 59:
case 2326:
case 943:
case 1156:
case 3236:
case 3209:
case 1902:
case 163:
case 1679:
case 1513:
case 451:
case 3878:
case 1261:
case 3126:
case 1600:
case 61:
case 4094:
case 3195:
case 355:
case 2158:
case 2079:
case 203:
case 3982:
case 554:
case 288:
case 3865:
case 817:
case 2245:
case 3408:
case 3680:
case 2404:
case 272:
case 1996:
case 3583:
case 2469:
case 1925:
case 2010:
case 2703:
case 1762:
case 22:
case 1637:
case 4:
case 2542:
case 1133:
case 2081:
case 2921:
case 772:
case 3260:
case 1614:
case 3601:
case 642:
case 1271:
case 2973:
case 1669:
case 3616:
case 2819:
case 669:
case 4090:
case 1230:
case 1559:
case 2943:
case 1088:
case 972:
case 2870:
case 2597:
case 903:
case 1241:
case 2926:
case 47:
case 1276:
case 1120:
case 120:
case 2836:
case 2572:
case 3958:
case 2995:
case 3698:
case 1507:
case 3192:
case 994:
case 271:
case 2723:
case 229:
case 797:
case 2392:
case 2746:
case 1905:
case 3177:
case 1181:
case 2451:
case 936:
case 2424:
case 1186:
case 2020:
case 526:
case 1517:
case 3147:
case 3388:
case 1:
case 2967:
case 686:
case 2741:
case 3184:
case 997:
case 1778:
case 2730:
case 1915:
case 2188:
case 4085:
case 3002:
case 2658:
case 122:
case 1213:
case 3509:
case 3695:
case 1482:
case 297:
case 2152:
case 1322:
case 1745:
case 2906:
case 66:
case 3654:
case 325:
case 3643:
case 1179:
case 970:
case 3352:
case 2789:
case 1793:
case 3491:
case 641:
case 539:
case 2911:
case 479:
case 1534:
case 771:
case 1656:
case 3540:
case 3496:
case 1651:
case 2916:
case 3385:
case 3425:
case 236:
case 2901:
case 3564:
case 3842:
case 88:
case 1775:
case 640:
case 1090:
case 3531:
case 316:
case 2568:
case 40:
case 2786:
case 2697:
case 973:
case 1938:
case 110:
case 3378:
case 1659:
case 1220:
case 2843:
case 3511:
case 1141:
case 2970:
case 659:
case 2672:
case 71:
case 3263:
case 2178:
case 3629:
case 2936:
case 2895:
case 1788:
case 902:
case 2964:
case 773:
case 1514:
case 2360:
case 3144:
case 2931:
case 1123:
case 111:
case 2353:
case 2148:
case 2387:
case 2427:
case 2642:
case 3968:
case 2344:
case 798:
case 3348:
case 2781:
case 3187:
case 109:
case 2003:
case 1062:
case 3375:
case 33:
case 1627:
case 3894:
case 1442:
case 2175:
case 4078:
case 2290:
case 2898:
case 3882:
case 827:
case 3032:
case 3393:
case 202:
case 298:
case 1472:
case 2779:
case 2193:
case 1891:
case 3567:
case 700:
case 2285:
case 1790:
case 1551:
case 901:
case 1666:
case 3640:
case 2801:
case 1103:
case 2668:
case 89:
case 1249:
case 410:
case 558:
case 3521:
case 284:
case 3664:
case 3554:
case 3526:
case 2839:
case 900:
case 315:
case 1279:
case 2558:
case 409:
case 1524:
case 1556:
case 1661:
case 411:
case 719:
case 3543:
case 818:
case 2288:
case 3438:
case 1617:
case 2461:
case 3702:
case 784:
case 2434:
case 987:
case 200:
case 4062:
case 2582:
case 2720:
case 634:
case 1815:
case 2733:
case 2046:
case 984:
case 2555:
case 1468:
case 1999:
case 2957:
case 324:
case 3653:
case 3796:
case 96:
case 3201:
case 1214:
case 3660:
case 1533:
case 1623:
case 1475:
case 161:
case 3962:
case 740:
case 1794:
case 462:
case 286:
case 1755:
case 3644:
case 1630:
case 3852:
case 1782:
case 1520:
case 3211:
case 295:
case 2172:
case 3129:
case 1445:
case 2017:
case 3206:
case 3550:
case 1676:
case 1065:
case 741:
case 2197:
case 449:
case 2329:
case 1493:
case 2489:
case 160:
case 1932:
case 3239:
case 2756:
case 2724:
case 3728:
case 2441:
case 2476:
case 786:
case 2847:
case 2884:
case 4042:
case 1758:
case 3888:
case 514:
case 2061:
case 2430:
case 2892:
case 517:
case 2066:
case 4072:
case 2423:
case 1399:
case 697:
case 2877:
case 2446:
case 2471:
case 1237:
case 3157:
case 854:
case 2751:
case 3183:
case 769:
case 2850:
case 58:
case 153:
case 3295:
case 1613:
case 162:
case 1579:
case 2258:
case 942:
case 2336:
case 1134:
case 2863:
case 44:
case 3243:
case 1256:
case 1224:
case 3136:
case 1500:
case 3715:
case 2944:
case 1251:
case 356:
case 4065:
case 2168:
case 2585:
case 742:
case 460:
case 3948:
case 738:
case 2960:
case 2331:
case 3221:
case 2364:
case 1510:
case 3368:
case 3119:
case 2987:
case 3890:
case 3577:
case 1042:
case 2255:
case 39:
case 2294:
case 1107:
case 3592:
case 826:
case 3718:
case 566:
case 2165:
case 1097:
case 4068:
case 2588:
case 318:
case 2059:
case 3708:
case 1586:
case 815:
case 2413:
case 3365:
case 238:
case 1072:
case 2282:
case 3993:
case 3432:
case 1117:
case 1321:
case 2151:
case 1481:
case 3783:
case 3477:
case 1860:
case 3846:
case 2649:
case 2266:
case 3823:
case 545:
case 1562:
case 3933:
case 3492:
case 1844:
case 437:
case 577:
case 2503:
case 1373:
case 1343:
case 1158:
case 3238:
case 434:
case 1874:
case 3830:
case 1652:
case 2261:
case 3484:
case 2234:
case 3356:
case 3324:
case 2513:
case 3841:
case 3876:
case 3532:
case 1486:
case 2124:
case 2797:
case 952:
case 611:
case 3006:
case 307:
case 143:
case 833:
case 1265:
case 1400:
case 609:
case 2391:
case 1004:
case 2452:
case 1688:
case 45:
case 346:
case 1155:
case 2325:
case 3235:
case 2485:
case 752:
case 1069:
case 610:
case 3016:
case 304:
case 3001:
case 1410:
case 2541:
case 382:
case 1717:
case 3108:
case 847:
case 2922:
case 137:
case 3979:
case 1272:
case 2530:
case 2308:
case 2259:
case 3612:
case 3118:
case 2523:
case 251:
case 1548:
case 2114:
case 1316:
case 3803:
case 2055:
case 3098:
case 844:
case 3314:
case 2094:
case 3910:
case 3719:
case 3981:
case 592:
case 4004:
case 1690:
case 1977:
case 15:
case 3337:
case 1766:
case 612:
case 2768:
case 2305:
case 3299:
case 1992:
case 750:
case 2137:
case 3043:
case 1367:
case 1545:
case 1380:
case 4014:
case 2315:
case 4069:
case 1761:
case 1593:
case 3450:
case 950:
case 3986:
case 3904:
case 3859:
case 2561:
case 2624:
case 3300:
case 2534:
case 213:
case 3628:
case 3122:
case 2908:
case 2745:
case 333:
case 222:
case 2213:
case 197:
case 2482:
case 3232:
case 2455:
case 3349:
case 1568:
case 2494:
case 2090:
case 1262:
case 3969:
case 846:
case 2149:
case 4086:
case 27:
case 2566:
case 2110:
case 1916:
case 2651:
case 3753:
case 881:
case 1451:
case 1883:
case 3787:
case 1857:
case 403:
case 3535:
case 3473:
case 97:
case 3760:
case 1746:
case 1392:
case 2905:
case 171:
case 2748:
case 1723:
case 532:
case 3381:
case 1694:
case 3937:
case 1377:
case 2507:
case 1347:
case 1730:
case 2915:
case 3495:
case 1188:
case 3386:
case 3426:
case 3050:
case 1776:
case 2517:
case 3443:
case 1967:
case 42:
case 1384:
case 2186:
case 1456:
case 3691:
case 1980:
case 1020:
case 505:
case 3951:
case 1840:
case 3333:
case 2669:
case 221:
case 2223:
case 2614:
case 1081:
case 2271:
case 3112:
case 1864:
case 1437:
case 2133:
case 3077:
case 1831:
case 220:
case 3047:
case 1995:
case 2302:
case 1954:
case 2276:
case 2120:
case 3861:
case 2559:
case 3608:
case 1870:
case 1597:
case 3924:
case 3084:
case 2838:
case 2230:
case 2991:
case 3817:
case 779:
case 172:
case 1000:
case 878:
case 1245:
case 3406:
case 375:
case 429:
case 103:
case 1079:
case 2289:
case 4033:
case 3439:
case 347:
case 979:
case 2637:
case 12:
case 653:
case 662:
case 1414:
case 3807:
case 4020:
case 1469:
case 3605:
case 3599:
case 2085:
case 2925:
case 2835:
case 1190:
case 3416:
case 2815:
case 3436:
case 1041:
case 3409:
case 41:
case 1582:
case 1720:
case 100:
case 3591:
case 651:
case 1434:
case 3470:
case 1288:
case 3750:
case 70:
case 723:
case 2999:
case 3525:
case 1957:
case 2805:
case 1071:
case 90:
case 473:
case 3060:
case 533:
case 1046:
case 2281:
case 3431:
case 2818:
case 184:
case 2249:
case 3869:
case 2551:
case 2666:
case 1285:
case 3959:
case 1252:
case 2045:
case 3132:
case 3528:
case 1811:
case 845:
case 2113:
case 2524:
case 2634:
case 2808:
case 1089:
case 1929:
case 2332:
case 223:
case 2465:
case 1558:
case 4030:
case 1290:
case 911:
case 663:
case 1898:
case 376:
case 2537:
case 710:
case 2442:
case 1175:
case 3907:
case 909:
case 1749:
case 2825:
case 2935:
case 1003:
case 3699:
case 2062:
case 400:
case 1193:
case 2891:
case 1459:
case 419:
case 2497:
case 1779:
case 4071:
case 173:
case 4046:
case 910:
case 3389:
case 709:
case 3429:
case 1145:
case 401:
case 2472:
case 892:
case 808:
case 1700:
case 198:
case 1013:
case 2130:
case 2788:
case 1895:
case 544:
case 3341:
case 1909:
case 1854:
case 1672:
case 3784:
case 1178:
case 330:
case 3330:
case 506:
case 2176:
case 2220:
case 2141:
case 1697:
case 3856:
case 3824:
case 2938:
case 1786:
case 3508:
case 210:
case 1781:
case 331:
case 3323:
case 3851:
case 1919:
case 575:
case 3518:
case 211:
case 1148:
case 1427:
case 1642:
case 1387:
case 3371:
case 547:
case 2514:
case 3346:
case 3296:
case 2107:
case 753:
case 3225:
case 3701:
case 2335:
case 4034:
case 2581:
case 620:
case 4061:
case 138:
case 848:
case 3711:
case 832:
case 1413:
case 142:
case 2117:
case 441:
case 953:
case 4066:
case 2586:
case 581:
case 46:
case 345:
case 3317:
case 1059:
case 377:
case 621:
case 3739:
case 2500:
case 2256:
case 2224:
case 1370:
case 546:
case 1974:
case 4007:
case 1552:
case 1336:
case 2134:
case 390:
case 3780:
case 2579:
case 253:
case 3138:
case 1987:
case 1953:
case 3946:
case 2166:
case 3971:
case 507:
case 1585:
case 3923:
case 2251:
case 1944:
case 1340:
case 3366:
case 3795:
case 1034:
case 3070:
case 2758:
case 1061:
case 2478:
case 1645:
case 74:
case 3754:
case 67:
case 3036:
case 1441:
case 1847:
case 1476:
case 830:
case 1693:
case 2689:
case 761:
case 3009:
case 3886:
case 3487:
case 2237:
case 3881:
case 582:
case 3453:
case 1446:
case 3460:
case 3773:
case 3064:
case 1471:
case 1357:
case 3019:
case 2399:
case 1675:
case 141:
case 1892:
case 3040:
case 1066:
case 613:
case 186:
case 2755:
case 2623:
case 261:
case 2533:
case 3903:
case 1007:
case 3218:
case 3810:
case 392:
case 1197:
case 260:
case 2159:
case 2641:
case 4027:
case 195:
case 3800:
case 805:
case 1678:
case 2445:
case 2782:
case 2520:
case 2630:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1746302402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,];
var gg_b = "1746302402/";

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
