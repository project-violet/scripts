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
case 300:
case 2689:
case 3227:
case 2290:
case 361:
case 4017:
case 2140:
case 625:
case 1523:
case 2656:
case 13:
case 836:
case 3402:
case 676:
case 2739:
case 3966:
case 2983:
case 3032:
case 2214:
case 3383:
case 3116:
case 3233:
case 2395:
case 1657:
case 312:
case 3995:
case 4035:
case 3899:
case 3249:
case 1434:
case 501:
case 1537:
case 1488:
case 250:
case 1690:
case 3211:
case 3868:
case 1151:
case 560:
case 1252:
case 285:
case 3279:
case 3168:
case 1851:
case 2773:
case 1795:
case 982:
case 3577:
case 1243:
case 666:
case 2496:
case 1352:
case 186:
case 3379:
case 2218:
case 2979:
case 88:
case 3086:
case 3444:
case 2911:
case 2161:
case 3311:
case 1239:
case 2465:
case 191:
case 3722:
case 2471:
case 2175:
case 1193:
case 1587:
case 1438:
case 518:
case 2752:
case 3726:
case 1484:
case 1273:
case 2295:
case 1828:
case 3864:
case 1072:
case 3059:
case 3082:
case 2933:
case 1128:
case 2441:
case 948:
case 1922:
case 55:
case 3164:
case 2314:
case 3283:
case 3333:
case 2492:
case 144:
case 3474:
case 588:
case 371:
case 2047:
case 607:
case 2559:
case 2109:
case 7:
case 3957:
case 2357:
case 2673:
case 2905:
case 3305:
case 826:
case 692:
case 2582:
case 456:
case 959:
case 1008:
case 2643:
case 3563:
case 2077:
case 849:
case 1618:
case 2639:
case 3990:
case 2390:
case 2927:
case 875:
case 4030:
case 1760:
case 956:
case 3681:
case 884:
case 1147:
case 1564:
case 3528:
case 814:
case 1665:
case 2906:
case 1671:
case 2638:
case 3887:
case 2684:
case 1177:
case 768:
case 3960:
case 3110:
case 2360:
case 2808:
case 356:
case 264:
case 1692:
case 14:
case 3187:
case 3593:
case 3707:
case 1829:
case 4059:
case 2876:
case 1925:
case 2650:
case 2142:
case 1473:
case 595:
case 3483:
case 2466:
case 1075:
case 2891:
case 2788:
case 933:
case 1061:
case 3274:
case 2176:
case 2172:
case 2219:
case 3725:
case 2978:
case 1931:
case 4086:
case 328:
case 2418:
case 3400:
case 2462:
case 3194:
case 2734:
case 1355:
case 3620:
case 1238:
case 2530:
case 1045:
case 2028:
case 3869:
case 1338:
case 3971:
case 1741:
case 794:
case 2580:
case 1792:
case 1255:
case 3115:
case 3344:
case 443:
case 522:
case 3815:
case 2396:
case 3169:
case 1981:
case 4036:
case 323:
case 3021:
case 2051:
case 3374:
case 1771:
case 3941:
case 2392:
case 1456:
case 277:
case 923:
case 938:
case 1660:
case 3035:
case 3248:
case 3898:
case 2153:
case 2503:
case 1234:
case 412:
case 3449:
case 2797:
case 3405:
case 1568:
case 3003:
case 3625:
case 3801:
case 2457:
case 1350:
case 1040:
case 2634:
case 3613:
case 461:
case 755:
case 710:
case 2554:
case 2655:
case 3427:
case 1070:
case 152:
case 2521:
case 839:
case 2750:
case 645:
case 780:
case 1846:
case 1462:
case 2907:
case 1734:
case 869:
case 3159:
case 3331:
case 1978:
case 3509:
case 3748:
case 3281:
case 227:
case 1146:
case 3955:
case 2439:
case 1697:
case 1265:
case 1495:
case 1191:
case 3325:
case 3778:
case 1650:
case 4094:
case 1142:
case 2913:
case 1876:
case 3313:
case 3186:
case 690:
case 2334:
case 2129:
case 1755:
case 106:
case 80:
case 2075:
case 1788:
case 224:
case 1292:
case 2250:
case 1360:
case 1558:
case 2177:
case 3706:
case 2877:
case 684:
case 24:
case 164:
case 968:
case 1808:
case 617:
case 2696:
case 2760:
case 4087:
case 756:
case 167:
case 3545:
case 2665:
case 2297:
case 3644:
case 3220:
case 2920:
case 2397:
case 1655:
case 1490:
case 2516:
case 1104:
case 3320:
case 1688:
case 2599:
case 1521:
case 2070:
case 1804:
case 310:
case 49:
case 639:
case 1634:
case 879:
case 1535:
case 1260:
case 380:
case 2350:
case 1457:
case 177:
case 1341:
case 4015:
case 1738:
case 2771:
case 596:
case 1414:
case 1392:
case 902:
case 2765:
case 1853:
case 1974:
case 1051:
case 941:
case 1024:
case 3068:
case 2384:
case 738:
case 723:
case 3225:
case 3602:
case 3099:
case 3606:
case 1944:
case 1365:
case 2255:
case 1580:
case 1371:
case 2792:
case 3132:
case 237:
case 421:
case 2288:
case 2741:
case 994:
case 3832:
case 302:
case 3231:
case 3570:
case 3381:
case 2452:
case 1396:
case 3207:
case 3627:
case 497:
case 2339:
case 115:
case 321:
case 150:
case 2690:
case 782:
case 3098:
case 2766:
case 3135:
case 3943:
case 665:
case 3431:
case 3407:
case 2053:
case 402:
case 185:
case 1362:
case 2124:
case 599:
case 3222:
case 3821:
case 3015:
case 1739:
case 3413:
case 2762:
case 3700:
case 921:
case 3854:
case 3973:
case 3069:
case 2657:
case 743:
case 39:
case 825:
case 2515:
case 3633:
case 1656:
case 700:
case 23:
case 2004:
case 3180:
case 3649:
case 480:
case 3880:
case 1257:
case 2367:
case 3967:
case 1460:
case 1290:
case 1689:
case 3611:
case 17:
case 3001:
case 3803:
case 1536:
case 3103:
case 99:
case 636:
case 1767:
case 1652:
case 463:
case 892:
case 3600:
case 3542:
case 2662:
case 468:
case 2008:
case 1643:
case 3:
case 3010:
case 3705:
case 3576:
case 1390:
case 1673:
case 2267:
case 1357:
case 3572:
case 1109:
case 759:
case 3830:
case 649:
case 1809:
case 3727:
case 3130:
case 2790:
case 804:
case 1582:
case 835:
case 3546:
case 1905:
case 1295:
case 2273:
case 1845:
case 1752:
case 3711:
case 1789:
case 68:
case 244:
case 1266:
case 2356:
case 1492:
case 1933:
case 2128:
case 1441:
case 2922:
case 1218:
case 1063:
case 3952:
case 286:
case 1262:
case 247:
case 1471:
case 1175:
case 1161:
case 3858:
case 2239:
case 2389:
case 1465:
case 216:
case 4064:
case 1911:
case 1029:
case 2940:
case 3340:
case 78:
case 3050:
case 1303:
case 71:
case 2780:
case 2410:
case 2703:
case 1317:
case 3408:
case 2970:
case 966:
case 3370:
case 469:
case 567:
case 1380:
case 1230:
case 2487:
case 1664:
case 1565:
case 392:
case 3491:
case 2735:
case 108:
case 3866:
case 3442:
case 2081:
case 593:
case 1712:
case 1044:
case 726:
case 2630:
case 3895:
case 3245:
case 2183:
case 3520:
case 2264:
case 2494:
case 3968:
case 2312:
case 3162:
case 2368:
case 3118:
case 3084:
case 4073:
case 749:
case 907:
case 1285:
case 1459:
case 2721:
case 3275:
case 992:
case 506:
case 2754:
case 304:
case 3446:
case 335:
case 3818:
case 775:
case 4056:
case 196:
case 3361:
case 2423:
case 1764:
case 3728:
case 2975:
case 2025:
case 1048:
case 1385:
case 661:
case 1126:
case 1560:
case 2179:
case 2212:
case 2013:
case 1358:
case 479:
case 976:
case 2498:
case 3964:
case 3793:
case 1928:
case 1254:
case 1122:
case 2680:
case 925:
case 598:
case 1221:
case 2785:
case 3814:
case 2031:
case 2654:
case 2105:
case 1280:
case 1006:
case 2588:
case 1699:
case 2909:
case 3270:
case 3531:
case 3309:
case 162:
case 3651:
case 2127:
case 643:
case 1002:
case 2534:
case 753:
case 3624:
case 3890:
case 2556:
case 894:
case 3522:
case 1514:
case 1623:
case 2632:
case 1669:
case 951:
case 3440:
case 841:
case 2201:
case 3860:
case 351:
case 57:
case 2237:
case 897:
case 3987:
case 1480:
case 1027:
case 3910:
case 3526:
case 2552:
case 2782:
case 2416:
case 1590:
case 1454:
case 4055:
case 515:
case 979:
case 476:
case 2298:
case 550:
case 3089:
case 2976:
case 4088:
case 2499:
case 1113:
case 1963:
case 3052:
case 945:
case 1125:
case 585:
case 2759:
case 2215:
case 855:
case 1807:
case 3729:
case 345:
case 3346:
case 425:
case 2022:
case 3056:
case 283:
case 1232:
case 2878:
case 739:
case 1359:
case 1435:
case 3372:
case 4034:
case 1557:
case 3994:
case 2468:
case 3763:
case 2786:
case 2412:
case 3865:
case 1458:
case 2294:
case 2844:
case 2736:
case 729:
case 1485:
case 3119:
case 2369:
case 3272:
case 4084:
case 218:
case 3871:
case 714:
case 435:
case 3819:
case 3475:
case 288:
case 3171:
case 2323:
case 3461:
case 56:
case 404:
case 2144:
case 3246:
case 3896:
case 3242:
case 787:
case 3291:
case 3043:
case 3353:
case 1336:
case 3677:
case 868:
case 2874:
case 4038:
case 1715:
case 407:
case 3192:
case 2732:
case 2464:
case 1518:
case 90:
case 369:
case 1562:
case 3409:
case 2686:
case 2543:
case 3663:
case 2337:
case 3937:
case 2539:
case 4050:
case 1694:
case 2573:
case 873:
case 270:
case 790:
case 30:
case 1701:
case 466:
case 1120:
case 2904:
case 633:
case 628:
case 2232:
case 2382:
case 1878:
case 1022:
case 2033:
case 3604:
case 1215:
case 663:
case 3505:
case 2807:
case 1394:
case 1786:
case 2557:
case 3855:
case 2107:
case 113:
case 1972:
case 3959:
case 1178:
case 2359:
case 1269:
case 2435:
case 2637:
case 1499:
case 101:
case 680:
case 3329:
case 745:
case 2011:
case 3527:
case 1782:
case 2454:
case 2421:
case 1942:
case 339:
case 1991:
case 2963:
case 2794:
case 2386:
case 2113:
case 3090:
case 678:
case 1802:
case 1589:
case 1102:
case 1552:
case 2417:
case 453:
case 3377:
case 838:
case 751:
case 2005:
case 1632:
case 53:
case 2787:
case 2615:
case 1556:
case 2514:
case 3347:
case 697:
case 4060:
case 2947:
case 3549:
case 2669:
case 3708:
case 2403:
case 2710:
case 3057:
case 1659:
case 3672:
case 769:
case 990:
case 1573:
case 3247:
case 2820:
case 1904:
case 3646:
case 2566:
case 2701:
case 1686:
case 1543:
case 3277:
case 833:
case 828:
case 1210:
case 2518:
case 3691:
case 3850:
case 70:
case 1539:
case 2430:
case 41:
case 1337:
case 1287:
case 673:
case 1953:
case 3936:
case 1874:
case 449:
case 586:
case 2769:
case 2610:
case 516:
case 475:
case 1398:
case 3428:
case 2723:
case 2715:
case 2687:
case 3229:
case 547:
case 4071:
case 914:
case 2259:
case 1736:
case 3753:
case 1144:
case 346:
case 1315:
case 856:
case 4041:
case 2332:
case 2881:
case 3138:
case 3066:
case 3932:
case 317:
case 2335:
case 3935:
case 3839:
case 1368:
case 519:
case 1550:
case 1100:
case 1312:
case 195:
case 3139:
case 3351:
case 6:
case 4066:
case 417:
case 2951:
case 1800:
case 326:
case 949:
case 707:
case 3843:
case 2716:
case 1754:
case 2712:
case 3096:
case 484:
case 2768:
case 349:
case 3019:
case 3921:
case 1883:
case 4062:
case 4018:
case 3173:
case 1316:
case 1183:
case 1264:
case 704:
case 3873:
case 1597:
case 527:
case 375:
case 1399:
case 414:
case 735:
case 2044:
case 2519:
case 848:
case 358:
case 3477:
case 1970:
case 3917:
case 2596:
case 2664:
case 3544:
case 1538:
case 3980:
case 1020:
case 157:
case 2380:
case 1584:
case 1717:
case 1685:
case 1658:
case 958:
case 3675:
case 3574:
case 365:
case 1730:
case 882:
case 2612:
case 2668:
case 812:
case 4057:
case 1534:
case 2002:
case 1588:
case 2006:
case 2699:
case 1401:
case 1105:
case 1654:
case 2616:
case 4090:
case 1621:
case 552:
case 1805:
case 965:
case 353:
case 1909:
case 1680:
case 1299:
case 725:
case 3761:
case 3156:
case 3775:
case 2254:
case 1364:
case 3506:
case 2122:
case 3328:
case 861:
case 1833:
case 3856:
case 2822:
case 122:
case 2078:
case 2436:
case 439:
case 2993:
case 2432:
case 3393:
case 3251:
case 4014:
case 1013:
case 1811:
case 1268:
case 2126:
case 3502:
case 1179:
case 281:
case 1212:
case 3152:
case 3985:
case 1603:
case 1025:
case 642:
case 2137:
case 3797:
case 110:
case 155:
case 3457:
case 1950:
case 180:
case 2837:
case 2613:
case 3634:
case 1997:
case 3104:
case 3490:
case 3554:
case 2080:
case 899:
case 2607:
case 3521:
case 1678:
case 163:
case 2017:
case 2054:
case 2971:
case 1016:
case 2869:
case 450:
case 1132:
case 374:
case 3371:
case 1938:
case 2123:
case 3580:
case 3365:
case 3944:
case 2344:
case 705:
case 2965:
case 3517:
case 1207:
case 3396:
case 1570:
case 102:
case 2169:
case 3319:
case 2021:
case 2919:
case 2823:
case 3974:
case 3853:
case 2374:
case 3392:
case 2433:
case 2941:
case 3738:
case 3341:
case 377:
case 2992:
case 2035:
case 1602:
case 1225:
case 974:
case 2248:
case 3153:
case 3024:
case 2449:
case 1012:
case 1313:
case 3876:
case 3650:
case 1778:
case 2731:
case 3191:
case 3466:
case 535:
case 3241:
case 3093:
case 504:
case 306:
case 46:
case 1281:
case 719:
case 2725:
case 3978:
case 1331:
case 3219:
case 1159:
case 393:
case 3172:
case 2378:
case 3418:
case 1307:
case 409:
case 906:
case 3734:
case 2194:
case 2713:
case 3296:
case 592:
case 3846:
case 3265:
case 830:
case 507:
case 1064:
case 4029:
case 3872:
case 3530:
case 1988:
case 1702:
case 168:
case 65:
case 688:
case 1220:
case 2306:
case 1644:
case 2030:
case 2887:
case 3108:
case 4047:
case 2960:
case 3360:
case 2302:
case 566:
case 1561:
case 364:
case 256:
case 1674:
case 2187:
case 2593:
case 1575:
case 1830:
case 872:
case 3109:
case 1572:
case 2957:
case 3357:
case 1546:
case 3582:
case 1727:
case 632:
case 1010:
case 1:
case 3643:
case 695:
case 1591:
case 1542:
case 1600:
case 2990:
case 2327:
case 3639:
case 1420:
case 3927:
case 3390:
case 467:
case 1576:
case 2577:
case 248:
case 3419:
case 2200:
case 3496:
case 2086:
case 3979:
case 1158:
case 2444:
case 3465:
case 4028:
case 3161:
case 3175:
case 3756:
case 744:
case 2349:
case 786:
case 3949:
case 3845:
case 2547:
case 3295:
case 657:
case 2059:
case 2864:
case 3441:
case 3145:
case 2082:
case 3933:
case 1956:
case 2283:
case 3314:
case 909:
case 4093:
case 791:
case 271:
case 3739:
case 2199:
case 1015:
case 2966:
case 1504:
case 3366:
case 2233:
case 2383:
case 1154:
case 1425:
case 1121:
case 3395:
case 2816:
case 3743:
case 4024:
case 950:
case 915:
case 1700:
case 1098:
case 1835:
case 350:
case 1939:
case 2812:
case 121:
case 2868:
case 1226:
case 2918:
case 1407:
case 862:
case 1431:
case 73:
case 1803:
case 37:
case 1611:
case 551:
case 2227:
case 3689:
case 261:
case 3840:
case 3140:
case 3767:
case 1553:
case 1180:
case 3870:
case 622:
case 2622:
case 1633:
case 3656:
case 896:
case 1817:
case 2402:
case 1967:
case 1117:
case 3257:
case 1880:
case 3170:
case 1059:
case 947:
case 709:
case 3273:
case 3484:
case 991:
case 2779:
case 1349:
case 916:
case 517:
case 3046:
case 489:
case 986:
case 1474:
case 424:
case 2711:
case 344:
case 1333:
case 1283:
case 1164:
case 3922:
case 546:
case 1914:
case 854:
case 1086:
case 2952:
case 2326:
case 3510:
case 386:
case 1200:
case 2481:
case 148:
case 3438:
case 3587:
case 347:
case 2733:
case 3714:
case 3239:
case 3076:
case 231:
case 2989:
case 3662:
case 2591:
case 3008:
case 3757:
case 2010:
case 92:
case 2087:
case 672:
case 1327:
case 3267:
case 3594:
case 1957:
case 2572:
case 2830:
case 2130:
case 1305:
case 32:
case 2683:
case 2817:
case 1205:
case 77:
case 33:
case 3569:
case 2649:
case 2880:
case 2117:
case 4040:
case 2037:
case 2611:
case 3598:
case 2803:
case 2001:
case 681:
case 100:
case 2103:
case 696:
case 452:
case 4070:
case 611:
case 1626:
case 822:
case 3501:
case 3289:
case 3455:
case 3339:
case 1868:
case 1211:
case 2627:
case 3690:
case 2939:
case 3824:
case 1812:
case 221:
case 3488:
case 2431:
case 2943:
case 3343:
case 143:
case 1478:
case 3053:
case 2407:
case 1168:
case 539:
case 1918:
case 1233:
case 2504:
case 1116:
case 1383:
case 182:
case 2023:
case 2605:
case 2821:
case 2015:
case 1199:
case 434:
case 715:
case 3762:
case 2700:
case 2413:
case 1249:
case 1899:
case 785:
case 1995:
case 2973:
case 2069:
case 2854:
case 3373:
case 3657:
case 536:
case 1198:
case 294:
case 1433:
case 334:
case 1941:
case 305:
case 3765:
case 2744:
case 2836:
case 1449:
case 3384:
case 3234:
case 1898:
case 1248:
case 3719:
case 1035:
case 2606:
case 1115:
case 3255:
case 3489:
case 1411:
case 2774:
case 297:
case 2132:
case 3741:
case 2016:
case 337:
case 123:
case 1919:
case 3981:
case 1823:
case 2381:
case 934:
case 2570:
case 202:
case 1479:
case 3452:
case 2207:
case 1080:
case 3397:
case 3516:
case 2997:
case 1206:
case 3599:
case 553:
case 263:
case 1017:
case 1607:
case 842:
case 3070:
case 255:
case 1101:
case 565:
case 1551:
case 1720:
case 699:
case 883:
case 3040:
case 813:
case 1837:
case 1202:
case 3350:
case 3512:
case 1625:
case 2648:
case 3568:
case 2950:
case 1302:
case 1110:
case 1960:
case 3177:
case 1887:
case 3877:
case 1593:
case 42:
case 1810:
case 767:
case 34:
case 156:
case 2561:
case 4008:
case 3696:
case 3009:
case 3760:
case 2702:
case 1030:
case 51:
case 3847:
case 3665:
case 2220:
case 4042:
case 1713:
case 1400:
case 4091:
case 2307:
case 133:
case 3443:
case 3931:
case 2509:
case 2748:
case 924:
case 1725:
case 989:
case 486:
case 2159:
case 3045:
case 491:
case 2064:
case 4076:
case 3388:
case 3238:
case 1894:
case 1244:
case 447:
case 1620:
case 3355:
case 3439:
case 1731:
case 2778:
case 3925:
case 2934:
case 1058:
case 3334:
case 1274:
case 444:
case 870:
case 3061:
case 526:
case 324:
case 389:
case 1483:
case 1691:
case 1642:
case 1150:
case 3543:
case 3337:
case 1676:
case 2629:
case 2937:
case 827:
case 2901:
case 1672:
case 20:
case 730:
case 889:
case 1197:
case 2865:
case 667:
case 2196:
case 3736:
case 1753:
case 187:
case 3369:
case 1838:
case 2871:
case 1095:
case 318:
case 117:
case 1932:
case 1138:
case 3323:
case 2171:
case 495:
case 388:
case 2461:
case 3315:
case 2915:
case 2896:
case 3144:
case 184:
case 2242:
case 2892:
case 129:
case 1608:
case 2043:
case 2841:
case 2677:
case 1263:
case 1018:
case 548:
case 1936:
case 664:
case 3953:
case 1884:
case 3174:
case 3732:
case 114:
case 1428:
case 2141:
case 3398:
case 918:
case 360:
case 3416:
case 1527:
case 3976:
case 2089:
case 1834:
case 2376:
case 2253:
case 3026:
case 342:
case 3991:
case 1772:
case 4007:
case 2391:
case 2729:
case 1451:
case 1505:
case 1776:
case 3946:
case 245:
case 2346:
case 1604:
case 1982:
case 3022:
case 1014:
case 3878:
case 960:
case 3269:
case 1791:
case 1959:
case 279:
case 3972:
case 2994:
case 4025:
case 3412:
case 3786:
case 3394:
case 901:
case 2204:
case 698:
case 720:
case 1057:
case 2777:
case 1347:
case 251:
case 3387:
case 1090:
case 837:
case 2987:
case 2910:
case 2160:
case 3310:
case 3102:
case 3654:
case 3105:
case 3401:
case 3437:
case 3588:
case 1930:
case 1578:
case 153:
case 2270:
case 2157:
case 3127:
case 2651:
case 3730:
case 165:
case 685:
case 740:
case 1060:
case 762:
case 3635:
case 2513:
case 2525:
case 2240:
case 225:
case 1852:
case 3879:
case 3961:
case 483:
case 3111:
case 3415:
case 83:
case 1189:
case 3423:
case 3975:
case 2728:
case 1745:
case 703:
case 1985:
case 3212:
case 1502:
case 1640:
case 3268:
case 67:
case 3013:
case 1328:
case 2964:
case 401:
case 1506:
case 2114:
case 3133:
case 3945:
case 711:
case 3299:
case 460:
case 2055:
case 3680:
case 796:
case 1670:
case 3149:
case 2453:
case 3785:
case 3031:
case 2814:
case 1856:
case 3833:
case 1173:
case 292:
case 332:
case 1019:
case 149:
case 528:
case 1463:
case 2751:
case 1065:
case 2999:
case 3630:
case 3597:
case 1873:
case 2245:
case 1228:
case 1954:
case 2038:
case 3183:
case 207:
case 3316:
case 2166:
case 3312:
case 2162:
case 3550:
case 2084:
case 708:
case 1935:
case 1143:
case 1293:
case 2275:
case 932:
case 45:
case 235:
case 1351:
case 395:
case 82:
case 1770:
case 3940:
case 1903:
case 2050:
case 3685:
case 3717:
case 3584:
case 1675:
case 2693:
case 844:
case 1661:
case 266:
case 354:
case 18:
case 886:
case 3970:
case 1740:
case 158:
case 66:
case 2581:
case 954:
case 2097:
case 3487:
case 3538:
case 11:
case 1867:
case 2628:
case 1055:
case 597:
case 2761:
case 2506:
case 3928:
case 1793:
case 2156:
case 2328:
case 541:
case 4079:
case 2856:
case 303:
case 3078:
case 911:
case 63:
case 3764:
case 2393:
case 3432:
case 311:
case 236:
case 2852:
case 594:
case 3826:
case 578:
case 3358:
case 2889:
case 381:
case 2224:
case 2640:
case 3048:
case 1190:
case 265:
case 1404:
case 1651:
case 3612:
case 1624:
case 1525:
case 3668:
case 1513:
case 2060:
case 3002:
case 420:
case 4027:
case 3616:
case 3217:
case 1157:
case 362:
case 563:
case 1309:
case 1270:
case 1209:
case 1581:
case 1370:
case 809:
case 258:
case 1408:
case 3596:
case 1628:
case 21:
case 2544:
case 754:
case 3571:
case 691:
case 3303:
case 2903:
case 1050:
case 616:
case 647:
case 2447:
case 2770:
case 166:
case 3592:
case 2661:
case 1693:
case 2574:
case 732:
case 1472:
case 3285:
case 2143:
case 2935:
case 3258:
case 573:
case 3924:
case 1912:
case 2324:
case 2351:
case 1818:
case 1261:
case 3799:
case 135:
case 1862:
case 3951:
case 4083:
case 104:
case 2041:
case 1724:
case 3712:
case 2609:
case 4000:
case 249:
case 3321:
case 192:
case 1038:
case 1520:
case 1166:
case 2873:
case 1895:
case 2954:
case 275:
case 2065:
case 795:
case 1751:
case 1476:
case 3000:
case 2936:
case 1677:
case 408:
case 2018:
case 2184:
case 2608:
case 3769:
case 1043:
case 3610:
case 1892:
case 284:
case 1242:
case 1445:
case 2428:
case 1141:
case 788:
case 531:
case 3723:
case 1192:
case 3715:
case 2884:
case 1871:
case 2095:
case 1969:
case 1073:
case 1272:
case 1119:
case 3485:
case 3259:
case 2838:
case 3181:
case 1196:
case 2753:
case 3458:
case 1896:
case 1461:
case 1165:
case 864:
case 1171:
case 2493:
case 3332:
case 2066:
case 2138:
case 1923:
case 3881:
case 3798:
case 2672:
case 930:
case 3737:
case 2197:
case 3566:
case 2583:
case 10:
case 3701:
case 806:
case 5:
case 893:
case 624:
case 1409:
case 3562:
case 2642:
case 2500:
case 2691:
case 330:
case 770:
case 3430:
case 619:
case 1629:
case 3480:
case 1987:
case 874:
case 2090:
case 4006:
case 1860:
case 1160:
case 1910:
case 2377:
case 898:
case 634:
case 3977:
case 1470:
case 3005:
case 3623:
case 3615:
case 3514:
case 1204:
case 2708:
case 3710:
case 3403:
case 2982:
case 760:
case 3033:
case 1056:
case 3831:
case 411:
case 652:
case 2014:
case 1346:
case 145:
case 701:
case 1729:
case 2505:
case 3807:
case 2776:
case 2155:
case 3049:
case 4048:
case 2855:
case 2742:
case 2959:
case 1372:
case 3435:
case 3359:
case 3131:
case 1376:
case 3637:
case 3813:
case 2746:
case 1089:
case 2834:
case 2527:
case 3590:
case 399:
case 2772:
case 3125:
case 713:
case 1342:
case 1052:
case 3079:
case 3963:
case 3236:
case 3113:
case 2134:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1746583201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,];
var gg_b = "1746583201/";

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
