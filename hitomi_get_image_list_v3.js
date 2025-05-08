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
case 1887:
case 2493:
case 3095:
case 355:
case 1131:
case 902:
case 634:
case 763:
case 3658:
case 3050:
case 2222:
case 2699:
case 221:
case 1133:
case 2886:
case 2725:
case 1130:
case 2848:
case 3051:
case 3687:
case 1324:
case 814:
case 3421:
case 3629:
case 2455:
case 86:
case 972:
case 683:
case 440:
case 1274:
case 243:
case 3859:
case 4010:
case 1495:
case 1450:
case 2440:
case 2307:
case 508:
case 852:
case 1306:
case 2135:
case 2928:
case 418:
case 1723:
case 2898:
case 1020:
case 1949:
case 2634:
case 1567:
case 4011:
case 1720:
case 1477:
case 2476:
case 3998:
case 2566:
case 1016:
case 3940:
case 87:
case 3729:
case 2841:
case 703:
case 393:
case 3650:
case 2099:
case 2330:
case 2594:
case 234:
case 135:
case 2333:
case 327:
case 2799:
case 2840:
case 1925:
case 1895:
case 3459:
case 3194:
case 2498:
case 2209:
case 926:
case 3653:
case 80:
case 3758:
case 10:
case 2331:
case 3976:
case 1284:
case 3823:
case 3139:
case 1261:
case 2448:
case 1172:
case 3506:
case 568:
case 3991:
case 643:
case 2855:
case 1263:
case 3821:
case 1028:
case 2544:
case 95:
case 2034:
case 1335:
case 2049:
case 2539:
case 759:
case 2891:
case 3820:
case 3955:
case 1621:
case 34:
case 3990:
case 577:
case 2921:
case 3367:
case 3911:
case 2747:
case 2810:
case 1224:
case 3881:
case 146:
case 846:
case 1773:
case 2978:
case 857:
case 3913:
case 1788:
case 3369:
case 751:
case 1683:
case 1109:
case 624:
case 1046:
case 1489:
case 2238:
case 2322:
case 1057:
case 2047:
case 2537:
case 1071:
case 526:
case 3108:
case 3789:
case 1368:
case 2097:
case 2514:
case 3832:
case 3615:
case 796:
case 629:
case 4086:
case 3488:
case 2161:
case 2272:
case 2685:
case 3114:
case 376:
case 2418:
case 1796:
case 260:
case 55:
case 2508:
case 2160:
case 600:
case 3089:
case 3561:
case 585:
case 1632:
case 2797:
case 3584:
case 3471:
case 502:
case 2233:
case 1592:
case 1122:
case 2818:
case 3873:
case 936:
case 3871:
case 1670:
case 1688:
case 1783:
case 2988:
case 412:
case 1505:
case 1778:
case 631:
case 2946:
case 1956:
case 4093:
case 1646:
case 2656:
case 2230:
case 1479:
case 3336:
case 2365:
case 1569:
case 3870:
case 125:
case 3888:
case 1081:
case 4091:
case 3432:
case 825:
case 1947:
case 717:
case 3100:
case 1235:
case 967:
case 908:
case 2501:
case 1360:
case 3779:
case 2619:
case 2697:
case 1827:
case 2411:
case 2826:
case 3015:
case 1696:
case 3152:
case 2503:
case 1889:
case 2410:
case 403:
case 200:
case 1975:
case 3212:
case 1361:
case 1363:
case 3926:
case 3103:
case 978:
case 1542:
case 1032:
case 886:
case 186:
case 513:
case 3896:
case 3574:
case 3136:
case 2757:
case 3497:
case 2771:
case 3509:
case 1810:
case 611:
case 3613:
case 246:
case 2678:
case 2070:
case 2746:
case 1980:
case 257:
case 2683:
case 2073:
case 916:
case 3294:
case 1983:
case 625:
case 2536:
case 317:
case 1537:
case 1047:
case 131:
case 1238:
case 3704:
case 2664:
case 1426:
case 1964:
case 2368:
case 1019:
case 1163:
case 1404:
case 3885:
case 3239:
case 1775:
case 3244:
case 2879:
case 1161:
case 4029:
case 1272:
case 1418:
case 2374:
case 1685:
case 722:
case 493:
case 4058:
case 290:
case 1508:
case 2206:
case 3300:
case 1160:
case 3447:
case 2632:
case 584:
case 3026:
case 1797:
case 211:
case 1233:
case 646:
case 3011:
case 2783:
case 3013:
case 2078:
case 2670:
case 3710:
case 3847:
case 2505:
case 1231:
case 1988:
case 1970:
case 3485:
case 2673:
case 3618:
case 2778:
case 3010:
case 340:
case 1973:
case 3192:
case 3522:
case 2646:
case 318:
case 1365:
case 1647:
case 2657:
case 2479:
case 1971:
case 941:
case 3105:
case 225:
case 124:
case 2569:
case 2671:
case 2081:
case 3266:
case 4051:
case 129:
case 1619:
case 2997:
case 2827:
case 4077:
case 1697:
case 2732:
case 170:
case 3142:
case 1785:
case 870:
case 1413:
case 1996:
case 2889:
case 396:
case 1503:
case 4053:
case 1410:
case 100:
case 923:
case 4095:
case 1675:
case 1500:
case 3927:
case 2975:
case 2363:
case 2032:
case 4002:
case 3776:
case 354:
case 1493:
case 3862:
case 1916:
case 3530:
case 3648:
case 2131:
case 3743:
case 422:
case 3741:
case 4079:
case 2917:
case 821:
case 1725:
case 2999:
case 1617:
case 1848:
case 2858:
case 3041:
case 2130:
case 1025:
case 815:
case 19:
case 466:
case 3076:
case 3817:
case 2445:
case 3043:
case 1455:
case 3533:
case 843:
case 3093:
case 597:
case 2274:
case 1307:
case 3755:
case 3834:
case 2450:
case 252:
case 1928:
case 2020:
case 2628:
case 2723:
case 1898:
case 2567:
case 1959:
case 1634:
case 949:
case 2451:
case 1441:
case 2720:
case 523:
case 2477:
case 2659:
case 2934:
case 3339:
case 74:
case 1443:
case 3112:
case 1566:
case 4027:
case 3950:
case 1841:
case 989:
case 3237:
case 3995:
case 1330:
case 1099:
case 3902:
case 1843:
case 2853:
case 1876:
case 1762:
case 2925:
case 2850:
case 1840:
case 3434:
case 2138:
case 1625:
case 3449:
case 3951:
case 2895:
case 1717:
case 406:
case 1498:
case 2716:
case 1209:
case 3953:
case 20:
case 3748:
case 3798:
case 2261:
case 581:
case 1920:
case 1855:
case 3507:
case 1734:
case 2620:
case 2028:
case 1749:
case 1890:
case 2335:
case 3572:
case 839:
case 1923:
case 139:
case 2554:
case 1544:
case 2728:
case 3945:
case 1486:
case 3214:
case 1891:
case 1382:
case 3655:
case 1921:
case 3984:
case 2860:
case 1701:
case 3375:
case 3961:
case 2327:
case 3963:
case 1585:
case 1291:
case 1000:
case 1422:
case 141:
case 3397:
case 1179:
case 2861:
case 1700:
case 521:
case 1255:
case 2245:
case 2914:
case 3808:
case 2742:
case 1752:
case 236:
case 1290:
case 2250:
case 1637:
case 2792:
case 2581:
case 677:
case 2474:
case 1318:
case 123:
case 2113:
case 2937:
case 3452:
case 1936:
case 3510:
case 2636:
case 791:
case 3400:
case 3022:
case 3347:
case 197:
case 2578:
case 3181:
case 897:
case 2277:
case 371:
case 2468:
case 3722:
case 1304:
case 2251:
case 929:
case 4035:
case 3401:
case 2092:
case 2253:
case 2769:
case 970:
case 607:
case 3803:
case 3437:
case 2868:
case 3526:
case 2642:
case 1652:
case 3385:
case 116:
case 583:
case 330:
case 465:
case 1465:
case 494:
case 3852:
case 2903:
case 3249:
case 3968:
case 2126:
case 748:
case 1708:
case 3234:
case 636:
case 710:
case 3800:
case 534:
case 1127:
case 1298:
case 2461:
case 1969:
case 1248:
case 1547:
case 1037:
case 2669:
case 3170:
case 3518:
case 3217:
case 2573:
case 3408:
case 2546:
case 361:
case 3622:
case 4006:
case 2463:
case 2104:
case 2570:
case 1311:
case 3262:
case 3171:
case 1905:
case 207:
case 2605:
case 181:
case 2692:
case 3146:
case 3009:
case 1286:
case 667:
case 1992:
case 2966:
case 3598:
case 3128:
case 1666:
case 369:
case 2054:
case 42:
case 2667:
case 531:
case 3072:
case 1390:
case 1549:
case 2559:
case 2754:
case 1744:
case 645:
case 3007:
case 262:
case 2612:
case 889:
case 1739:
case 892:
case 1912:
case 491:
case 934:
case 3159:
case 1438:
case 2377:
case 456:
case 3633:
case 775:
case 1204:
case 4060:
case 447:
case 2353:
case 1158:
case 2148:
case 1472:
case 73:
case 1376:
case 31:
case 1407:
case 1833:
case 2350:
case 1599:
case 1129:
case 3256:
case 833:
case 1517:
case 1094:
case 4084:
case 2302:
case 1187:
case 3247:
case 3630:
case 2406:
case 3038:
case 1831:
case 3590:
case 2191:
case 782:
case 799:
case 3334:
case 1433:
case 3555:
case 2806:
case 2939:
case 2067:
case 3672:
case 2712:
case 99:
case 1398:
case 2215:
case 524:
case 1145:
case 487:
case 3607:
case 3782:
case 202:
case 2012:
case 3121:
case 2520:
case 144:
case 245:
case 3906:
case 3123:
case 3593:
case 1430:
case 2279:
case 2387:
case 3362:
case 3894:
case 1211:
case 374:
case 849:
case 2435:
case 685:
case 3466:
case 3730:
case 1838:
case 213:
case 65:
case 1386:
case 1195:
case 1525:
case 529:
case 2143:
case 2994:
case 3731:
case 2824:
case 1210:
case 570:
case 353:
case 304:
case 794:
case 3733:
case 3030:
case 3399:
case 3540:
case 1966:
case 709:
case 399:
case 3323:
case 382:
case 3812:
case 3635:
case 2666:
case 1667:
case 2355:
case 2534:
case 1054:
case 2044:
case 3321:
case 2967:
case 826:
case 3982:
case 4009:
case 2549:
case 162:
case 1612:
case 289:
case 97:
case 1754:
case 2744:
case 862:
case 1198:
case 292:
case 1528:
case 3320:
case 2391:
case 779:
case 557:
case 4065:
case 3117:
case 1377:
case 2341:
case 1351:
case 774:
case 85:
case 3454:
case 2158:
case 2472:
case 2343:
case 3931:
case 2794:
case 3270:
case 885:
case 2340:
case 3246:
case 2833:
case 2407:
case 233:
case 2218:
case 2094:
case 1395:
case 3273:
case 2517:
case 1186:
case 3162:
case 365:
case 3271:
case 1302:
case 1406:
case 394:
case 4:
case 753:
case 704:
case 2831:
case 1521:
case 769:
case 2807:
case 3545:
case 3035:
case 2066:
case 1067:
case 96:
case 1654:
case 1939:
case 525:
case 3972:
case 2639:
case 1523:
case 102:
case 1012:
case 511:
case 802:
case 1520:
case 3907:
case 1190:
case 3232:
case 3328:
case 845:
case 4022:
case 3606:
case 2430:
case 2102:
case 2211:
case 375:
case 684:
case 249:
case 3467:
case 1329:
case 2482:
case 813:
case 2525:
case 3278:
case 2195:
case 3577:
case 113:
case 586:
case 2213:
case 1358:
case 1143:
case 2153:
case 1994:
case 3412:
case 342:
case 71:
case 1824:
case 3938:
case 795:
case 3595:
case 3125:
case 3550:
case 3264:
case 633:
case 1141:
case 2151:
case 919:
case 3661:
case 730:
case 3579:
case 3684:
case 514:
case 3469:
case 250:
case 7:
case 2291:
case 1908:
case 2000:
case 1389:
case 3768:
case 241:
case 2703:
case 3663:
case 56:
case 1884:
case 348:
case 3660:
case 3068:
case 1861:
case 2700:
case 2179:
case 911:
case 2003:
case 1914:
case 958:
case 4031:
case 1245:
case 3492:
case 2614:
case 3396:
case 2752:
case 1742:
case 310:
case 2637:
case 1792:
case 2240:
case 1250:
case 3373:
case 1295:
case 420:
case 2318:
case 1069:
case 1202:
case 3965:
case 1583:
case 2809:
case 761:
case 3371:
case 3357:
case 1705:
case 878:
case 178:
case 479:
case 1578:
case 1580:
case 681:
case 867:
case 1005:
case 808:
case 409:
case 1251:
case 2241:
case 1253:
case 2243:
case 2865:
case 3909:
case 698:
case 3370:
case 3388:
case 1769:
case 2276:
case 2942:
case 2714:
case 3084:
case 1642:
case 2652:
case 1900:
case 3197:
case 2575:
case 3228:
case 2600:
case 2008:
case 3760:
case 495:
case 1379:
case 356:
case 1596:
case 1126:
case 3842:
case 2708:
case 2189:
case 2603:
case 2519:
case 2601:
case 957:
case 1901:
case 946:
case 2014:
case 3784:
case 2409:
case 2037:
case 2547:
case 2248:
case 388:
case 3383:
case 1484:
case 3216:
case 2310:
case 1669:
case 701:
case 391:
case 3892:
case 623:
case 1036:
case 1287:
case 298:
case 1588:
case 1570:
case 771:
case 1605:
case 1460:
case 3147:
case 1229:
case 4072:
case 1692:
case 2737:
case 281:
case 32:
case 2313:
case 1118:
case 2992:
case 3378:
case 2684:
case 3293:
case 1375:
case 1984:
case 3701:
case 3608:
case 2768:
case 3703:
case 350:
case 3291:
case 1963:
case 3585:
case 573:
case 248:
case 3179:
case 2405:
case 2223:
case 554:
case 503:
case 1397:
case 2185:
case 2774:
case 3614:
case 647:
case 413:
case 656:
case 2492:
case 2373:
case 1178:
case 1180:
case 323:
case 402:
case 691:
case 1356:
case 287:
case 3240:
case 1347:
case 801:
case 559:
case 512:
case 1400:
case 101:
case 1022:
case 3809:
case 2371:
case 1510:
case 445:
case 1837:
case 3304:
case 3241:
case 1513:
case 707:
case 768:
case 2370:
case 2388:
case 1511:
case 3276:
case 3243:
case 472:
case 3865:
case 1401:
case 2674:
case 3652:
case 2061:
case 1437:
case 3942:
case 3600:
case 3008:
case 1801:
case 2760:
case 1:
case 3465:
case 2063:
case 2119:
case 2527:
case 3575:
case 2060:
case 45:
case 247:
case 3708:
case 3189:
case 3603:
case 256:
case 2259:
case 2175:
case 3298:
case 3014:
case 3409:
case 3127:
case 3597:
case 3519:
case 3601:
case 2383:
case 3547:
case 462:
case 861:
case 1065:
case 3556:
case 1622:
case 1518:
case 1765:
case 1171:
case 980:
case 3311:
case 3313:
case 3992:
case 1173:
case 2380:
case 2378:
case 426:
case 3737:
case 1504:
case 4054:
case 869:
case 282:
case 2635:
case 2812:
case 1219:
case 2706:
case 468:
case 1297:
case 1935:
case 1128:
case 2323:
case 3967:
case 2296:
case 3039:
case 1072:
case 3534:
case 3044:
case 517:
case 392:
case 3739:
case 1494:
case 963:
case 389:
case 2867:
case 2134:
case 477:
case 4036:
case 745:
case 1159:
case 2149:
case 3226:
case 1738:
case 1633:
case 2529:
case 2024:
case 2933:
case 2931:
case 3794:
case 1439:
case 2270:
case 1116:
case 675:
case 2454:
case 3472:
case 3343:
case 2273:
case 3517:
case 580:
case 3599:
case 2246:
case 81:
case 11:
case 1038:
case 294:
case 2558:
case 1548:
case 895:
case 2257:
case 2930:
case 2271:
case 642:
case 809:
case 4005:
case 1555:
case 3433:
case 1334:
case 1120:
case 682:
case 3954:
case 3398:
case 3639:
case 1672:
case 1082:
case 3644:
case 726:
case 699:
case 2907:
case 4069:
case 120:
case 954:
case 1607:
case 1782:
case 2735:
case 879:
case 2606:
case 179:
case 3430:
case 478:
case 3766:
case 1593:
case 2232:
case 2328:
case 1906:
case 1466:
case 349:
case 1730:
case 1924:
case 1543:
case 1033:
case 1894:
case 3102:
case 1576:
case 75:
case 874:
case 3386:
case 3525:
case 436:
case 2280:
case 785:
case 1541:
case 2551:
case 23:
case 2316:
case 694:
case 2283:
case 3348:
case 665:
case 2412:
case 242:
case 1399:
case 1540:
case 1030:
case 596:
case 1733:
case 205:
case 2938:
case 104:
case 153:
case 3177:
case 804:
case 1706:
case 182:
case 1812:
case 1635:
case 3966:
case 1323:
case 2598:
case 199:
case 3424:
case 1321:
case 481:
case 2682:
case 2707:
case 3528:
case 993:
case 362:
case 4037:
case 1006:
case 744:
case 1134:
case 1867:
case 2159:
case 2633:
case 3351:
case 2738:
case 3377:
case 1024:
case 1933:
case 749:
case 2325:
case 4014:
case 1931:
case 1288:
case 385:
case 1270:
case 3148:
case 674:
case 94:
case 932:
case 3350:
case 653:
case 2256:
case 2247:
case 2038:
case 506:
case 3516:
case 1271:
case 209:
case 1035:
case 2555:
case 1545:
case 2120:
case 2349:
case 3944:
case 3193:
case 3806:
case 3939:
case 2082:
case 372:
case 3712:
case 2591:
case 220:
case 955:
case 2121:
case 1907:
case 2285:
case 3155:
case 2607:
case 3767:
case 3279:
case 1735:
case 2839:
case 2123:
case 1328:
case 1232:
case 2593:
case 2924:
case 4003:
case 2543:
case 522:
case 1624:
case 3387:
case 2362:
case 2576:
case 2894:
case 274:
case 313:
case 1278:
case 1280:
case 83:
case 3140:
case 3329:
case 2541:
case 1551:
case 784:
case 1283:
case 4052:
case 1502:
case 3176:
case 695:
case 1316:
case 3143:
case 842:
case 3994:
case 733:
case 2733:
case 3141:
case 2030:
case 2399:
case 441:
case 1550:
case 4000:
case 566:
case 2317:
case 61:
case 204:
case 1938:
case 450:
case 1074:
case 3327:
case 1661:
case 2984:
case 1768:
case 630:
case 2963:
case 148:
case 2132:
case 2960:
case 1223:
case 3884:
case 1221:
case 336:
case 810:
case 1774:
case 3863:
case 3245:
case 2808:
case 3581:
case 661:
case 3474:
case 2178:
case 1373:
case 3295:
case 3564:
case 1346:
case 2356:
case 187:
case 887:
case 3792:
case 201:
case 2022:
case 378:
case 2347:
case 1357:
case 2665:
case 1371:
case 2510:
case 3202:
case 3583:
case 367:
case 2722:
case 308:
case 4066:
case 2837:
case 2164:
case 2513:
case 2181:
case 3277:
case 2183:
case 3769:
case 1370:
case 1388:
case 2609:
case 781:
case 966:
case 3110:
case 2401:
case 1909:
case 3092:
case 2385:
case 1084:
case 230:
case 1674:
case 2974:
case 1119:
case 1436:
case 2:
case 2801:
case 741:
case 1197:
case 3900:
case 1763:
case 1668:
case 1060:
case 2234:
case 2249:
case 2968:
case 1259:
case 3596:
case 3901:
case 1175:
case 2800:
case 1216:
case 601:
case 3669:
case 1383:
case 2188:
case 3461:
case 723:
case 3258:
case 188:
case 489:
case 3557:
case 888:
case 2408:
case 377:
case 2622:
case 1892:
case 3104:
case 1922:
case 307:
case 3460:
case 368:
case 797:
case 1147:
case 2765:
case 3570:
case 1380:
case 4039:
case 2173:
case 2009:
case 906:
case 671:
case 2504:
case 12:
case 4044:
case 3692:
case 82:
case 2530:
case 2743:
case 2394:
case 400:
case 254:
case 2958:
case 3887:
case 510:
case 1777:
case 1002:
case 663:
case 2741:
case 3133:
case 18:
case 3917:
case 88:
case 3829:
case 1423:
case 3324:
case 128:
case 429:
case 2041:
case 3130:
case 1205:
case 2740:
case 2899:
case 1986:
case 2043:
case 3445:
case 2533:
case 1292:
case 470:
case 2929:
case 2817:
case 1421:
case 942:
case 2167:
case 3450:
case 3721:
case 2093:
case 2252:
case 3274:
case 2849:
case 2790:
case 3402:
case 3020:
case 3628:
case 905:
case 424:
case 3512:
case 2200:
case 3306:
case 3477:
case 3023:
case 975:
case 3934:
case 2791:
case 2203:
case 3949:
case 3451:
case 1045:
case 1535:
case 259:
case 1998:
case 2112:
case 2201:
case 2344:
case 93:
case 2793:
case 3021:
case 2090:
case 2339:
case 3851:
case 2640:
case 1650:
case 37:
case 2048:
case 2237:
case 2995:
case 547:
case 3016:
case 3877:
case 1695:
case 4075:
case 1428:
case 603:
case 1459:
case 999:
case 1941:
case 3895:
case 1677:
case 127:
case 3850:
case 827:
case 715:
case 2748:
case 1758:
case 79:
case 2643:
case 1029:
case 3716:
case 2676:
case 1943:
case 2953:
case 1194:
case 132:
case 832:
case 1506:
case 2693:
case 3284:
case 2417:
case 1821:
case 3620:
case 4047:
case 3845:
case 2507:
case 1991:
case 2208:
case 431:
case 3487:
case 3623:
case 3059:
case 612:
case 3260:
case 2366:
case 1645:
case 3429:
case 3107:
case 1990:
case 1820:
case 591:
case 3621:
case 2690:
case 2098:
case 3224:
case 2611:
case 3771:
case 1911:
case 947:
case 2419:
case 3165:
case 1392:
case 1913:
case 2613:
case 3773:
case 1496:
case 1881:
case 3680:
case 346:
case 2565:
case 3683:
case 3073:
case 618:
case 3770:
case 2610:
case 3427:
case 2294:
case 651:
case 3071:
case 217:
case 2704:
case 640:
case 3489:
case 3664:
case 724:
case 696:
case 280:
case 483:
case 2726:
case 4062:
case 1108:
case 2244:
case 1254:
case 2301:
case 594:
case 2915:
case 2239:
case 1488:
case 1470:
case 700:
case 2456:
case 1446:
case 390:
case 3374:
case 1027:
case 1342:
case 1473:
case 1471:
case 991:
case 1089:
case 2300:
case 1561:
case 2447:
case 1873:
case 3781:
case 311:
case 3592:
case 948:
case 2604:
case 1857:
case 3505:
case 358:
case 3783:
case 910:
case 3080:
case 3670:
case 3688:
case 1918:
case 2522:
case 3083:
case 617:
case 3778:
case 443:
case 2010:
case 1432:
case 1870:
case 3671:
case 1336:
case 2105:
case 3827:
case 4025:
case 415:
case 3732:
case 3360:
case 3997:
case 680:
case 3889:
case 296:
case 1568:
case 2314:
case 1478:
case 2142:
case 1152:
case 1480:
case 49:
case 866:
case 505:
case 1015:
case 760:
case 2819:
case 987:
case 3361:
case 822:
case 2927:
case 1212:
case 1101:
case 3975:
case 3384:
case 575:
case 2897:
case 3032:
case 3542:
case 1689:
case 53:
case 1509:
case 1611:
case 1497:
case 2883:
case 1004:
case 238:
case 2305:
case 3756:
case 2913:
case 2392:
case 2496:
case 2910:
case 3983:
case 930:
case 1610:
case 1018:
case 2369:
case 3811:
case 1294:
case 1704:
case 331:
case 3238:
case 3981:
case 817:
case 9:
case 1726:
case 880:
case 180:
case 2108:
case 666:
case 51:
case 3404:
case 1915:
case 3272:
case 1244:
case 2254:
case 40:
case 2560:
case 3184:
case 2832:
case 2615:
case 564:
case 2488:
case 1239:
case 206:
case 3207:
case 47:
case 3508:
case 1456:
case 2473:
case 1352:
case 2342:
case 276:
case 3418:
case 4016:
case 622:
case 435:
case 2584:
case 3932:
case 2457:
case 1447:
case 2089:
case 2561:
case 961:
case 4023:
case 3818:
case 520:
case 2873:
case 1856:
case 1604:
case 3233:
case 746:
case 2857:
case 579:
case 2871:
case 757:
case 1710:
case 1013:
case 151:
case 3804:
case 2918:
case 1192:
case 3656:
case 3973:
case 1337:
case 851:
case 1618:
case 1713:
case 840:
case 1485:
case 2870:
case 2888:
case 1711:
case 4020:
case 2432:
case 3957:
case 1105:
case 3971:
case 118:
case 3647:
case 1875:
case 414:
case 606:
case 1266:
case 3501:
case 329:
case 3619:
case 2267:
case 3503:
case 3282:
case 46:
case 2568:
case 3413:
case 2015:
case 553:
case 3785:
case 1314:
case 2152:
case 1142:
case 222:
case 3500:
case 2483:
case 1897:
case 3410:
case 790:
case 300:
case 1626:
case 2926:
case 676:
case 1308:
case 1743:
case 2753:
case 3916:
case 1530:
case 1648:
case 2050:
case 854:
case 1862:
case 1776:
case 2948:
case 2269:
case 1958:
case 255:
case 920:
case 2777:
case 3886:
case 3725:
case 2751:
case 735:
case 3222:
case 28:
case 321:
case 3662:
case 2702:
case 3025:
case 2423:
case 1987:
case 2205:
case 3848:
case 2629:
case 1533:
case 2292:
case 1043:
case 1740:
case 2986:
case 173:
case 39:
case 3490:
case 627:
case 571:
case 1755:
case 3307:
case 2859:
case 1093:
case 953:
case 1091:
case 904:
case 4081:
case 1200:
case 3649:
case 3959:
case 3441:
case 1203:
case 1201:
case 2998:
case 1112:
case 458:
case 159:
case 2354:
case 1344:
case 3443:
case 1055:
case 812:
case 1698:
case 3476:
case 2828:
case 1237:
case 2729:
case 490:
case 1640:
case 863:
case 2695:
case 1786:
case 1825:
case 1950:
case 2940:
case 2602:
case 3017:
case 3762:
case 3124:
case 3876:
case 1902:
case 3843:
case 3265:
case 655:
case 3099:
case 3330:
case 3717:
case 2459:
case 383:
case 3625:
case 714:
case 3799:
case 1641:
case 1434:
case 5:
case 1748:
case 3498:
case 1676:
case 628:
case 3209:
case 1086:
case 3448:
case 2506:
case 2144:
case 1154:
case 2312:
case 2993:
case 2416:
case 2823:
case 1798:
case 4071:
case 964:
case 3749:
case 1417:
case 1208:
case 3734:
case 1499:
case 4057:
case 3855:
case 3049:
case 3539:
case 339:
case 3923:
case 1366:
case 3544:
case 3034:
case 457:
case 3921:
case 1098:
case 1690:
case 4070:
case 4088:
case 3891:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1746684001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,];
var gg_b = "1746684001/";

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
