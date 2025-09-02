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
case 2040:
case 3310:
case 3498:
case 1937:
case 3135:
case 3807:
case 2252:
case 3364:
case 1459:
case 1745:
case 3327:
case 2973:
case 1288:
case 1295:
case 1841:
case 773:
case 3943:
case 366:
case 3419:
case 2980:
case 3844:
case 393:
case 3263:
case 3956:
case 2874:
case 2742:
case 3766:
case 758:
case 2128:
case 3458:
case 2885:
case 864:
case 3289:
case 2268:
case 1790:
case 1240:
case 3710:
case 3911:
case 1813:
case 3727:
case 1345:
case 3893:
case 943:
case 3764:
case 1979:
case 1509:
case 1991:
case 3012:
case 3476:
case 1626:
case 1865:
case 3372:
case 3605:
case 172:
case 3853:
case 2493:
case 2342:
case 1092:
case 2948:
case 454:
case 513:
case 3978:
case 1958:
case 1768:
case 118:
case 2290:
case 1873:
case 1547:
case 1045:
case 2941:
case 3533:
case 3072:
case 354:
case 3416:
case 1392:
case 222:
case 257:
case 290:
case 1102:
case 1880:
case 1974:
case 3437:
case 1496:
case 2261:
case 3769:
case 1998:
case 1985:
case 527:
case 645:
case 552:
case 4012:
case 3187:
case 3286:
case 3918:
case 856:
case 3628:
case 817:
case 1090:
case 3027:
case 3414:
case 2795:
case 79:
case 2245:
case 4070:
case 1494:
case 1506:
case 1976:
case 4083:
case 3479:
case 3491:
case 2755:
case 1454:
case 3369:
case 932:
case 2635:
case 1411:
case 3712:
case 742:
case 1061:
case 2965:
case 697:
case 1848:
case 3383:
case 2860:
case 4069:
case 493:
case 2538:
case 1728:
case 58:
case 67:
case 1181:
case 491:
case 2518:
case 2002:
case 294:
case 2834:
case 350:
case 1403:
case 3732:
case 999:
case 3434:
case 976:
case 1977:
case 1507:
case 2571:
case 2901:
case 3692:
case 3541:
case 2933:
case 226:
case 1612:
case 995:
case 2663:
case 3026:
case 852:
case 3030:
case 3582:
case 556:
case 1670:
case 4032:
case 3668:
case 3420:
case 3938:
case 63:
case 1202:
case 1922:
case 1553:
case 3436:
case 3417:
case 3067:
case 3024:
case 2925:
case 746:
case 701:
case 3809:
case 2836:
case 936:
case 3329:
case 349:
case 3513:
case 141:
case 1546:
case 737:
case 1939:
case 4029:
case 462:
case 3690:
case 60:
case 4024:
case 523:
case 4067:
case 860:
case 1610:
case 511:
case 3032:
case 2556:
case 3324:
case 3804:
case 184:
case 1664:
case 136:
case 2404:
case 3726:
case 1801:
case 3903:
case 3573:
case 147:
case 1321:
case 3029:
case 3847:
case 941:
case 362:
case 2543:
case 3650:
case 2686:
case 449:
case 2684:
case 3189:
case 666:
case 2228:
case 2406:
case 3724:
case 1155:
case 3767:
case 391:
case 2192:
case 2302:
case 199:
case 1917:
case 3235:
case 3326:
case 2554:
case 1195:
case 4030:
case 3115:
case 1672:
case 1305:
case 1825:
case 1549:
case 848:
case 1920:
case 1200:
case 821:
case 813:
case 3841:
case 714:
case 1943:
case 3916:
case 240:
case 3459:
case 3745:
case 3667:
case 3937:
case 1474:
case 1498:
case 1485:
case 695:
case 3882:
case 882:
case 1310:
case 819:
case 3068:
case 586:
case 1070:
case 402:
case 4061:
case 3350:
case 815:
case 1766:
case 380:
case 3499:
case 2534:
case 3255:
case 761:
case 2132:
case 97:
case 1263:
case 3361:
case 1956:
case 1419:
case 1069:
case 3345:
case 1727:
case 2536:
case 3991:
case 255:
case 3979:
case 2375:
case 2602:
case 3052:
case 1911:
case 2015:
case 1846:
case 792:
case 3813:
case 870:
case 4045:
case 2384:
case 3240:
case 1978:
case 3960:
case 684:
case 574:
case 529:
case 74:
case 1372:
case 1853:
case 3626:
case 2413:
case 2063:
case 1476:
case 1462:
case 10:
case 3761:
case 1533:
case 343:
case 3456:
case 2896:
case 3547:
case 2126:
case 3352:
case 3873:
case 1999:
case 2227:
case 2907:
case 318:
case 2084:
case 2130:
case 1187:
case 472:
case 1437:
case 2363:
case 283:
case 2944:
case 3880:
case 3392:
case 1959:
case 1072:
case 2715:
case 3976:
case 3494:
case 2854:
case 4068:
case 3632:
case 598:
case 2993:
case 1451:
case 1064:
case 1849:
case 1275:
case 1525:
case 1414:
case 3090:
case 1370:
case 3368:
case 1628:
case 2448:
case 1010:
case 1460:
case 2086:
case 5:
case 432:
case 3848:
case 504:
case 1383:
case 3411:
case 1712:
case 3061:
case 1369:
case 2894:
case 3242:
case 302:
case 2124:
case 2522:
case 993:
case 2266:
case 1491:
case 1479:
case 1732:
case 2904:
case 2166:
case 3544:
case 2172:
case 2695:
case 2688:
case 150:
case 991:
case 3181:
case 495:
case 2519:
case 1026:
case 3612:
case 1692:
case 2947:
case 2803:
case 2655:
case 1729:
case 3507:
case 2323:
case 1434:
case 1067:
case 1565:
case 1024:
case 1332:
case 3202:
case 898:
case 145:
case 1436:
case 3497:
case 1938:
case 3328:
case 484:
case 643:
case 436:
case 8:
case 804:
case 2230:
case 709:
case 3939:
case 2562:
case 962:
case 1809:
case 1477:
case 2401:
case 3664:
case 2169:
case 2433:
case 1324:
case 945:
case 1032:
case 530:
case 3028:
case 672:
case 3610:
case 886:
case 1690:
case 2183:
case 834:
case 515:
case 441:
case 1650:
case 406:
case 1029:
case 1847:
case 2516:
case 244:
case 710:
case 1573:
case 347:
case 3321:
case 1661:
case 2035:
case 949:
case 3833:
case 1163:
case 1957:
case 2551:
case 191:
case 3155:
case 1767:
case 950:
case 632:
case 2387:
case 570:
case 680:
case 829:
case 874:
case 3920:
case 3200:
case 3721:
case 1422:
case 2642:
case 395:
case 3936:
case 2229:
case 1997:
case 2023:
case 3825:
case 3549:
case 3188:
case 1806:
case 724:
case 1235:
case 1685:
case 4077:
case 2154:
case 3659:
case 1588:
case 1097:
case 2923:
case 2203:
case 2552:
case 3424:
case 137:
case 706:
case 3671:
case 3699:
case 1555:
case 1057:
case 101:
case 2824:
case 3563:
case 2304:
case 1619:
case 2178:
case 410:
case 1738:
case 667:
case 4039:
case 463:
case 2568:
case 496:
case 1929:
case 2297:
case 1209:
case 3777:
case 2196:
case 2747:
case 1003:
case 2826:
case 2665:
case 2306:
case 3339:
case 2143:
case 1031:
case 971:
case 2156:
case 213:
case 2257:
case 838:
case 3322:
case 1662:
case 221:
case 2704:
case 1932:
case 3426:
case 3430:
case 3208:
case 479:
case 4022:
case 248:
case 424:
case 1887:
case 1338:
case 2590:
case 661:
case 799:
case 2006:
case 3039:
case 363:
case 3656:
case 2680:
case 3113:
case 3921:
case 1146:
case 1797:
case 3736:
case 2709:
case 375:
case 1967:
case 977:
case 1924:
case 795:
case 1153:
case 3643:
case 252:
case 227:
case 1757:
case 808:
case 324:
case 826:
case 1038:
case 2550:
case 590:
case 3182:
case 64:
case 3320:
case 1660:
case 889:
case 1930:
case 3432:
case 1731:
case 784:
case 2171:
case 335:
case 1614:
case 2309:
case 3336:
case 3077:
case 2004:
case 131:
case 2159:
case 310:
case 2832:
case 1542:
case 736:
case 1144:
case 339:
case 3734:
case 2238:
case 2400:
case 2118:
case 885:
case 409:
case 620:
case 2138:
case 639:
case 1794:
case 28:
case 2812:
case 3855:
case 903:
case 2495:
case 3714:
case 3412:
case 3076:
case 3062:
case 34:
case 2046:
case 1754:
case 3125:
case 1396:
case 256:
case 3895:
case 1343:
case 3241:
case 1634:
case 508:
case 3888:
case 1964:
case 1207:
case 2521:
case 3779:
case 3990:
case 526:
case 4037:
case 1910:
case 3282:
case 890:
case 3470:
case 1018:
case 1620:
case 2440:
case 1378:
case 589:
case 3085:
case 2883:
case 3265:
case 217:
case 1756:
case 2869:
case 2044:
case 1617:
case 165:
case 3697:
case 1253:
case 1966:
case 1502:
case 942:
case 3737:
case 1796:
case 3019:
case 361:
case 1147:
case 780:
case 3101:
case 3213:
case 1246:
case 3379:
case 1293:
case 3657:
case 2349:
case 1071:
case 2975:
case 2505:
case 2007:
case 3840:
case 2870:
case 158:
case 675:
case 585:
case 4091:
case 4079:
case 3398:
case 3385:
case 3108:
case 4074:
case 1318:
case 414:
case 973:
case 3427:
case 211:
case 3014:
case 3992:
case 1677:
case 3051:
case 2256:
case 2963:
case 965:
case 2633:
case 2344:
case 367:
case 2243:
case 578:
case 688:
case 1371:
case 264:
case 2307:
case 2049:
case 2827:
case 2793:
case 1054:
case 1109:
case 3319:
case 3776:
case 2296:
case 3358:
case 2810:
case 4019:
case 461:
case 958:
case 3785:
case 609:
case 420:
case 2528:
case 1983:
case 3881:
case 718:
case 3248:
case 1718:
case 3842:
case 2872:
case 2353:
case 1759:
case 2625:
case 2866:
case 1056:
case 1969:
case 3466:
case 1043:
case 2707:
case 3472:
case 538:
case 1875:
case 2131:
case 1622:
case 2442:
case 3362:
case 3376:
case 1096:
case 2211:
case 2103:
case 3758:
case 3638:
case 4062:
case 851:
case 935:
case 2644:
case 1424:
case 745:
case 2191:
case 2179:
case 1377:
case 2821:
case 3595:
case 1020:
case 540:
case 3698:
case 52:
case 603:
case 2160:
case 1589:
case 3658:
case 301:
case 1563:
case 3619:
case 2114:
case 1699:
case 1671:
case 2607:
case 234:
case 3555:
case 337:
case 750:
case 1173:
case 2733:
case 2805:
case 2137:
case 963:
case 225:
case 3209:
case 2701:
case 996:
case 2900:
case 2570:
case 3540:
case 555:
case 188:
case 642:
case 3338:
case 2583:
case 1430:
case 3932:
case 1426:
case 3676:
case 377:
case 2693:
case 274:
case 3405:
case 568:
case 1201:
case 2025:
case 1113:
case 3303:
case 3146:
case 2564:
case 2277:
case 1736:
case 3823:
case 175:
case 2176:
case 1233:
case 3331:
case 1717:
case 163:
case 1656:
case 4003:
case 669:
case 988:
case 1720:
case 2708:
case 583:
case 1022:
case 2423:
case 1643:
case 179:
case 1696:
case 3651:
case 1077:
case 1905:
case 2001:
case 3614:
case 2119:
case 3107:
case 905:
case 3835:
case 1432:
case 2239:
case 3660:
case 1678:
case 881:
case 1320:
case 2158:
case 3581:
case 2308:
case 2185:
case 401:
case 446:
case 2649:
case 1429:
case 3144:
case 2222:
case 2572:
case 2902:
case 1734:
case 2174:
case 3542:
case 1611:
case 110:
case 2:
case 1603:
case 1855:
case 192:
case 2892:
case 1751:
case 3244:
case 2380:
case 3794:
case 2524:
case 2274:
case 2567:
case 2298:
case 2748:
case 1950:
case 3910:
case 1282:
case 2258:
case 4043:
case 883:
case 1990:
case 2373:
case 3927:
case 1791:
case 3492:
case 1241:
case 2139:
case 70:
case 1316:
case 2013:
case 3754:
case 1337:
case 2463:
case 3815:
case 1412:
case 1076:
case 3966:
case 3502:
case 2609:
case 4078:
case 1314:
case 365:
case 1697:
case 2942:
case 200:
case 114:
case 3394:
case 1074:
case 1265:
case 1098:
case 2981:
case 1587:
case 2348:
case 1360:
case 4094:
case 3620:
case 49:
case 3468:
case 3018:
case 671:
case 2530:
case 442:
case 2082:
case 358:
case 1483:
case 4011:
case 2868:
case 1840:
case 1657:
case 369:
case 3099:
case 1379:
case 1213:
case 3311:
case 2262:
case 1737:
case 2276:
case 161:
case 2765:
case 1280:
case 39:
case 2861:
case 4018:
case 3677:
case 1464:
case 2647:
case 1427:
case 1014:
case 282:
case 3318:
case 2048:
case 1398:
case 677:
case 4059:
case 2486:
case 2120:
case 4071:
case 544:
case 1776:
case 3011:
case 3461:
case 2237:
case 2136:
case 3371:
case 342:
case 77:
case 2117:
case 1952:
case 961:
case 2216:
case 458:
case 2995:
case 1079:
case 992:
case 2080:
case 2365:
case 2134:
case 270:
case 3759:
case 646:
case 2484:
case 433:
case 3983:
case 51:
case 1248:
case 1785:
case 1798:
case 3500:
case 3884:
case 2782:
case 3096:
case 1535:
case 3875:
case 2741:
case 2073:
case 2291:
case 2279:
case 1466:
case 2529:
case 3043:
case 3771:
case 3799:
case 1016:
case 3947:
case 3323:
case 2977:
case 2507:
case 2005:
case 1599:
case 1571:
case 721:
case 3655:
case 3735:
case 3519:
case 2612:
case 1933:
case 1689:
case 108:
case 4023:
case 1700:
case 748:
case 871:
case 938:
case 41:
case 2728:
case 3087:
case 3585:
case 3598:
case 1518:
case 2403:
case 1834:
case 3695:
case 194:
case 3224:
case 3904:
case 2457:
case 558:
case 1836:
case 3723:
case 2021:
case 3906:
case 3226:
case 3335:
case 2546:
case 444:
case 807:
case 3230:
case 2683:
case 569:
case 1820:
case 1300:
case 2328:
case 565:
case 487:
case 3640:
case 573:
case 2497:
case 953:
case 3857:
case 189:
case 2922:
case 381:
case 760:
case 985:
case 3537:
case 1404:
case 3516:
case 1543:
case 1877:
case 2801:
case 1686:
case 1000:
case 846:
case 2140:
case 3170:
case 837:
case 542:
case 481:
case 59:
case 2028:
case 659:
case 3787:
case 2610:
case 1702:
case 3401:
case 387:
case 2664:
case 1447:
case 284:
case 1839:
case 2195:
case 727:
case 1152:
case 2917:
case 3909:
case 295:
case 2936:
case 926:
case 2721:
case 3642:
case 2825:
case 2666:
case 2672:
case 3023:
case 2438:
case 908:
case 2200:
case 1684:
case 1908:
case 1228:
case 3387:
case 2155:
case 3232:
case 1406:
case 3551:
case 3112:
case 1874:
case 4086:
case 32:
case 2499:
case 1407:
case 1742:
case 2255:
case 3132:
case 1128:
case 501:
case 3818:
case 61:
case 1781:
case 537:
case 842:
case 1885:
case 1040:
case 2418:
case 3784:
case 1858:
case 2882:
case 916:
case 2937:
case 3775:
case 2288:
case 2295:
case 340:
case 1973:
case 717:
case 3871:
case 3063:
case 1446:
case 2865:
case 957:
case 2761:
case 2914:
case 2092:
case 1342:
case 359:
case 2951:
case 1557:
case 1055:
case 272:
case 483:
case 3786:
case 368:
case 3283:
case 1381:
case 577:
case 687:
case 2630:
case 1948:
case 1268:
case 803:
case 3270:
case 4084:
case 3465:
case 2813:
case 3517:
case 3015:
case 78:
case 1088:
case 2979:
case 355:
case 2991:
case 3949:
case 2052:
case 3602:
case 3375:
case 190:
case 468:
case 2443:
case 1355:
case 3856:
case 2974:
case 1261:
case 2102:
case 3944:
case 2998:
case 1081:
case 2985:
case 4063:
case 681:
case 1982:
case 3084:
case 218:
case 3130:
case 4015:
case 2547:
case 3126:
case 1388:
case 3227:
case 3577:
case 3264:
case 3075:
case 3896:
case 3124:
case 2629:
case 3167:
case 1814:
case 2242:
case 202:
case 2792:
case 3272:
case 2061:
case 2411:
case 3763:
case 3894:
case 2848:
case 3789:
case 1538:
case 531:
case 42:
case 3448:
case 2478:
case 873:
case 2368:
case 2752:
case 1879:
case 1891:
case 1788:
case 1795:
case 116:
case 723:
case 3854:
case 3539:
case 3715:
case 2632:
case 1121:
case 3946:
case 1913:
case 3700:
case 879:
case 2582:
case 308:
case 1558:
case 1831:
case 3145:
case 2434:
case 1655:
case 2729:
case 2541:
case 438:
case 725:
case 1172:
case 91:
case 2732:
case 1267:
case 394:
case 3002:
case 3834:
case 1688:
case 3518:
case 1585:
case 875:
case 592:
case 561:
case 1230:
case 839:
case 1335:
case 2513:
case 734:
case 1562:
case 1906:
case 1226:
case 3925:
case 3205:
case 249:
case 385:
case 75:
case 1897:
case 2332:
case 987:
case 2067:
case 2024:
case 2436:
case 1857:
case 3161:
case 786:
case 2668:
case 514:
case 453:
case 3150:
case 657:
case 690:
case 2730:
case 2650:
case 7:
case 3404:
case 1537:
case 3447:
case 1401:
case 2032:
case 2804:
case 2367:
case 353:
case 805:
case 1787:
case 651:
case 1681:
case 2330:
case 338:
case 1023:
case 1579:
case 408:
case 1642:
case 2235:
case 3152:
case 3511:
case 2806:
case 3839:
case 2326:
case 2957:
case 888:
case 1112:
case 2163:
case 2645:
case 2767:
case 2439:
case 494:
case 4002:
case 1560:
case 3578:
case 2189:
case 1838:
case 509:
case 3898:
case 2083:
case 2458:
case 2289:
case 3781:
case 1386:
case 1132:
case 2772:
case 1534:
case 3407:
case 2766:
case 2069:
case 266:
case 2419:
case 3980:
case 3874:
case 2956:
case 2364:
case 3503:
case 140:
case 2327:
case 638:
case 2135:
case 3252:
case 2807:
case 2943:
case 2215:
case 2996:
case 3531:
case 3444:
case 2310:
case 3858:
case 2498:
case 1784:
case 2070:
case 3040:
case 3381:
case 3948:
case 457:
case 422:
case 1089:
case 2508:
case 159:
case 3493:
case 3055:
case 983:
case 2366:
case 3557:
case 2605:
case 2853:
case 2462:
case 2012:
case 2994:
case 3446:
case 1949:
case 1375:
case 1602:
case 3095:
case 3597:
case 155:
case 3453:
case 3088:
case 588:
case 678:
case 2727:
case 2764:
case 2846:
case 1015:
case 1517:
case 3862:
case 2710:
case 3268:
case 1520:
case 84:
case 968:
case 3250:
case 451:
case 2286:
case 579:
case 1389:
case 2312:
case 23:
case 959:
case 2437:
case 1363:
case 2416:
case 322:
case 357:
case 390:
case 2959:
case 955:
case 1315:
case 2533:
case 1227:
case 2999:
case 1075:
case 1264:
case 1577:
case 3941:
case 3816:
case 3388:
case 596:
case 1084:
case 563:
case 1210:
case 575:
case 892:
case 1600:
case 3538:
case 510:
case 2383:
case 1789:
case 539:
case 3860:
case 694:
case 1763:
case 1894:
case 2712:
case 1953:
case 2491:
case 2479:
case 1522:
case 3851:
case 715:
case 1272:
case 1124:
case 3449:
case 3814:
case 92:
case 3121:
case 1946:
case 782:
case 3913:
case 1854:
case 2414:
case 1993:
case 3891:
case 3245:
case 3879:
case 2370:
case 814:
case 626:
case 3340:
case 2460:
case 1448:
case 535:
case 2396:
case 2754:
case 3219:
case 2711:
case 751:
case 698:
case 2492:
case 2964:
case 2207:
case 1521:
case 3852:
case 1271:
case 1093:
case 1455:
case 3139:
case 2634:
case 2106:
case 56:
case 4073:
case 2910:
case 3489:
case 4080:
case 1218:
case 3285:
case 3298:
case 470:
case 2889:
case 604:
case 3748:
case 3380:
case 18:
case 3524:
case 233:
case 3567:
case 2794:
case 3415:
case 2863:
case 1495:
case 3892:
case 2311:
case 2246:
case 3276:
case 964:
case 2071:
case 2099:
case 1505:
case 2743:
case 1007:
case 269:
case 528:
case 3041:
case 2293:
case 506:
case 1870:
case 1984:
case 415:
case 3530:
case 3082:
case 258:
case 2620:
case 1440:
case 2018:
case 1883:
case 2378:
case 1869:
case 273:
case 117:
case 923:
case 2253:
case 300:
case 2059:
case 3942:
case 3609:
case 2636:
case 1864:
case 2399:
case 3117:
case 3988:
case 3341:
case 1243:
case 2461:
case 3237:
case 2011:
case 1915:
case 3713:
case 3382:
case 547:
case 3120:
case 3890:
case 674:
case 584:
case 629:
case 2886:
case 2318:
case 2677:
case 1601:
case 382:
case 330:
case 319:
case 29:
case 1157:
case 2912:
case 2094:
case 1256:
case 3861:
case 2622:
case 1442:
case 2875:
case 956:
case 1707:
case 2771:
case 3291:
case 3529:
case 1346:
case 3313:
case 1211:
case 2096:
case 722:
case 1481:
case 3782:
case 2970:
case 4013:
case 686:
case 2884:
case 599:
case 2983:
case 1278:
case 634:
case 2718:
case 3484:
case 4065:
case 65:
case 2445:
case 1625:
case 370:
case 1872:
case 98:
case 3214:
case 3532:
case 3080:
case 3606:
case 3134:
case 203:
case 2056:
case 3365:
case 1194:
case 3607:
case 1641:
case 35:
case 3151:
case 3114:
case 1867:
case 847:
case 2658:
case 3008:
case 3160:
case 4:
case 836:
case 4001:
case 2685:
case 4033:
case 3821:
case 1923:
case 3301:
case 1009:
case 2588:
case 2097:
case 160:
case 498:
case 3333:
case 3644:
case 386:
case 1706:
case 3179:
case 277:
case 329:
case 1257:
case 3693:
case 1156:
case 113:
case 3646:
case 3569:
case 927:
case 2662:
case 3583:
case 148:
case 682:
case 572:
case 708:
case 1830:
case 4025:
case 3487:
case 2540:
case 1747:
case 3653:
case 1196:
case 3701:
case 2209:
case 1935:
case 794:
case 1665:
case 2153:
case 2637:
case 2204:
case 2967:
case 921:
case 2757:
case 2616:
case 127:
case 738:
case 2038:
case 86:
case 948:
case 3708:
case 600:
case 1590:
case 425:
case 1680:
case 2797:
case 3025:
case 3277:
case 3162:
case 1832:
case 1159:
case 231:
case 3:
case 3435:
case 1004:
case 304:
case 2542:
case 2691:
case 3174:
case 3185:
case 1400:
case 1238:
case 1118:
case 3828:
case 3158:
case 2930:
case 398:
case 2660:
case 2835:
case 960:
case 2926:
case 753:
case 2651:
case 3119:
case 1309:
case 2990:
case 83:
case 3455:
case 2241:
case 1139:
case 2895:
case 2888:
case 2316:
case 3521:
case 3271:
case 3299:
case 2062:
case 24:
case 759:
case 1463:
case 2125:
case 1013:
case 220:
case 292:
case 3488:
case 3053:
case 2714:
case 2961:
case 1274:
case 970:
case 1380:
case 1122:
case 3138:
case 550:
case 1298:
case 3986:
case 3218:
case 2483:
case 1530:
case 464:
case 3984:
case 2840:
case 87:
case 1868:
case 3870:
case 2945:
case 2391:
case 915:
case 3007:
case 3505:
case 3349:
case 2133:
case 1526:
case 2469:
case 2019:
case 2213:
case 1177:
case 1942:
case 100:
case 919:
case 317:
case 2265:
case 1780:
case 982:
case 3869:
case 1348:
case 2098:
case 3440:
case 2358:
case 3810:
case 1120:
case 115:
case 1713:
case 1988:
case 2079:
case 1216:
case 267:
case 2952:
case 3864:
case 3307:
case 2374:
case 3963:
case 1861:
case 900:
case 3344:
case 2014:
case 648:
case 2464:
case 311:
case 1647:
case 2427:
case 130:
case 417:
case 2410:
case 3989:
case 1940:
case 2638:
case 456:
case 3481:
case 1782:
case 2376:
case 3103:
case 2037:
case 2535:
case 2016:
case 1279:
case 3442:
case 1073:
case 1080:
case 2774:
case 170:
case 3872:
case 1251:
case 48:
case 2798:
case 4053:
case 3178:
case 2148:
case 566:
case 2589:
case 1008:
case 3682:
case 862:
case 2563:
case 3304:
case 1114:
case 15:
case 1151:
case 2722:
case 9:
case 2671:
case 134:
case 1179:
case 1644:
case 186:
case 2739:
case 3706:
case 3009:
case 2036:
case 3347:
case 3552:
case 2377:
case 3923:
case 3203:
case 781:
case 1301:
case 2618:
case 2020:
case 998:
case 4047:
case 2928:
case 2430:
case 1583:
case 348:
case 321:
case 2034:
case 3156:
case 1693:
case 313:
case 2802:
case 3306:
case 3143:
case 3665:
case 3935:
case 1701:
case 3402:
case 2777:
case 1236:
case 3297:
case 125:
case 1325:
case 1805:
case 3196:
case 1570:
case 1900:
case 3568:
case 288:
case 3830:
case 1708:
case 2586:
case 3550:
case 53:
case 617:
case 2165:
case 352:
case 1423:
case 2334:
case 224:
case 2022:
case 448:
case 3673:
case 2696:
case 974:
case 1162:
case 2736:
case 2201:
case 1025:
case 2921:
case 1564:
case 1277:
case 263:
case 2656:
case 71:
case 2039:
case 2717:
case 296:
case 850:
case 1510:
case 3590:
case 2720:
case 1308:
case 1828:
case 3400:
case 68:
case 1185:
case 1198:
case 1222:
case 1902:
case 2734:
case 2429:
case 239:
case 2654:
case 1:
case 1435:
case 3832:
case 2611:
case 744:
case 3829:
case 986:
case 2336:
case 2077:
case 2575:
case 2141:
case 1239:
case 2432:
case 2694:
case 787:
case 3199:
case 1033:
case 4009:
case 2678:
case 2584:
case 2320:
case 2800:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1756836002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,];
var gg_b = "1756836002/";

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
