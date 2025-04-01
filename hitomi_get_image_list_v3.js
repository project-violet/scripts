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
case 113:
case 1142:
case 408:
case 3371:
case 1625:
case 2531:
case 3926:
case 1033:
case 2387:
case 866:
case 2105:
case 804:
case 55:
case 3760:
case 486:
case 3563:
case 1357:
case 1560:
case 1335:
case 679:
case 1409:
case 596:
case 1092:
case 3164:
case 2295:
case 2803:
case 1518:
case 2612:
case 3384:
case 1995:
case 3729:
case 2697:
case 3349:
case 1384:
case 3448:
case 2731:
case 2016:
case 2679:
case 2354:
case 2432:
case 3763:
case 3409:
case 3560:
case 547:
case 251:
case 3357:
case 2226:
case 1760:
case 3227:
case 2356:
case 2493:
case 1718:
case 3877:
case 1926:
case 88:
case 46:
case 4058:
case 3625:
case 1371:
case 3529:
case 1386:
case 326:
case 3937:
case 1968:
case 2453:
case 2268:
case 247:
case 2396:
case 1910:
case 544:
case 3397:
case 1483:
case 2545:
case 2684:
case 3312:
case 2415:
case 2649:
case 1422:
case 3052:
case 1119:
case 2671:
case 3480:
case 3687:
case 1341:
case 2020:
case 3847:
case 988:
case 1955:
case 1847:
case 815:
case 2213:
case 600:
case 1285:
case 3656:
case 2082:
case 624:
case 1687:
case 25:
case 2862:
case 1401:
case 906:
case 728:
case 795:
case 1052:
case 160:
case 3483:
case 1312:
case 3910:
case 296:
case 2237:
case 2023:
case 2539:
case 212:
case 1937:
case 1304:
case 387:
case 2533:
case 2136:
case 2730:
case 2358:
case 1168:
case 335:
case 1388:
case 1110:
case 455:
case 3853:
case 3514:
case 3446:
case 3075:
case 1698:
case 3113:
case 2640:
case 1850:
case 4054:
case 301:
case 1919:
case 1370:
case 2801:
case 2134:
case 3972:
case 945:
case 2365:
case 902:
case 707:
case 3462:
case 3306:
case 2307:
case 269:
case 3370:
case 101:
case 715:
case 3919:
case 2272:
case 1516:
case 475:
case 2185:
case 1489:
case 3716:
case 1853:
case 216:
case 135:
case 3388:
case 781:
case 2063:
case 4087:
case 1815:
case 292:
case 661:
case 2883:
case 3168:
case 3031:
case 565:
case 3304:
case 766:
case 3720:
case 1205:
case 2451:
case 608:
case 482:
case 980:
case 862:
case 704:
case 1267:
case 2002:
case 1942:
case 2499:
case 1045:
case 2905:
case 1569:
case 1665:
case 223:
case 720:
case 2967:
case 427:
case 3911:
case 4025:
case 168:
case 3658:
case 3964:
case 1474:
case 899:
case 538:
case 184:
case 1723:
case 1582:
case 3723:
case 1124:
case 3343:
case 3520:
case 384:
case 3195:
case 2688:
case 2809:
case 2211:
case 4094:
case 2552:
case 2848:
case 368:
case 1911:
case 1769:
case 1890:
case 459:
case 3400:
case 3893:
case 78:
case 2477:
case 3569:
case 3607:
case 3045:
case 3481:
case 1966:
case 393:
case 3267:
case 1340:
case 2021:
case 66:
case 1720:
case 2398:
case 1982:
case 1693:
case 1865:
case 3920:
case 827:
case 1322:
case 173:
case 1807:
case 2055:
case 882:
case 211:
case 3766:
case 1564:
case 2282:
case 2767:
case 786:
case 2013:
case 1511:
case 960:
case 2175:
case 2353:
case 1479:
case 3711:
case 2538:
case 106:
case 619:
case 285:
case 2223:
case 3764:
case 1566:
case 3412:
case 4077:
case 3129:
case 2315:
case 3542:
case 3690:
case 1923:
case 433:
case 572:
case 3858:
case 188:
case 3036:
case 3923:
case 2068:
case 1129:
case 1764:
case 3163:
case 2609:
case 2888:
case 1969:
case 1711:
case 540:
case 3479:
case 3085:
case 2738:
case 2350:
case 1766:
case 1160:
case 2425:
case 373:
case 1380:
case 2870:
case 859:
case 1920:
case 3693:
case 3865:
case 1034:
case 1118:
case 3982:
case 3217:
case 2024:
case 3408:
case 2678:
case 2216:
case 855:
case 1309:
case 3519:
case 240:
case 3449:
case 3615:
case 2390:
case 21:
case 1348:
case 1914:
case 2487:
case 4059:
case 1961:
case 3486:
case 4091:
case 252:
case 2214:
case 2139:
case 3102:
case 3772:
case 2840:
case 2261:
case 1650:
case 2933:
case 2456:
case 3898:
case 1102:
case 3457:
case 1471:
case 289:
case 2145:
case 1233:
case 3719:
case 3961:
case 495:
case 3914:
case 1528:
case 3348:
case 585:
case 3728:
case 3916:
case 2992:
case 3230:
case 1449:
case 2917:
case 2683:
case 1519:
case 681:
case 1484:
case 234:
case 2332:
case 761:
case 537:
case 913:
case 1408:
case 1217:
case 1653:
case 1292:
case 3572:
case 1555:
case 12:
case 3737:
case 843:
case 2736:
case 1691:
case 2130:
case 1710:
case 2585:
case 2011:
case 1854:
case 2808:
case 1513:
case 4050:
case 548:
case 2066:
case 3005:
case 90:
case 3647:
case 2646:
case 3510:
case 1239:
case 3713:
case 3245:
case 2734:
case 3568:
case 3755:
case 1381:
case 2886:
case 149:
case 1537:
case 2871:
case 3537:
case 349:
case 700:
case 203:
case 1902:
case 1245:
case 3921:
case 2377:
case 1067:
case 3239:
case 591:
case 3114:
case 2498:
case 3038:
case 3856:
case 415:
case 2785:
case 1510:
case 1005:
case 3161:
case 1647:
case 968:
case 775:
case 2857:
case 695:
case 4053:
case 2117:
case 2192:
case 861:
case 2835:
case 481:
case 3513:
case 939:
case 3854:
case 276:
case 2534:
case 1303:
case 993:
case 3374:
case 3659:
case 3699:
case 886:
case 3346:
case 503:
case 1524:
case 4032:
case 3726:
case 404:
case 2072:
case 808:
case 1362:
case 3894:
case 935:
case 727:
case 662:
case 2152:
case 576:
case 1963:
case 3473:
case 3169:
case 901:
case 1526:
case 3724:
case 3389:
case 2263:
case 302:
case 3488:
case 145:
case 3526:
case 2879:
case 2391:
case 2028:
case 248:
case 1896:
case 3404:
case 2359:
case 59:
case 1473:
case 2674:
case 1231:
case 3825:
case 2676:
case 759:
case 2218:
case 3470:
case 556:
case 2465:
case 1894:
case 3677:
case 3362:
case 86:
case 3182:
case 3524:
case 1918:
case 2260:
case 1595:
case 3275:
case 3405:
case 261:
case 772:
case 3660:
case 2302:
case 3467:
case 3040:
case 2579:
case 876:
case 1438:
case 638:
case 910:
case 2675:
case 1193:
case 3276:
case 1345:
case 2277:
case 109:
case 3999:
case 3200:
case 1725:
case 803:
case 586:
case 1203:
case 3629:
case 3525:
case 45:
case 3274:
case 3796:
case 2541:
case 2903:
case 929:
case 508:
case 1132:
case 3895:
case 314:
case 3663:
case 56:
case 2974:
case 4020:
case 957:
case 3043:
case 1824:
case 856:
case 1796:
case 2631:
case 1190:
case 3203:
case 3725:
case 447:
case 2442:
case 243:
case 309:
case 740:
case 3596:
case 71:
case 1826:
case 3438:
case 2098:
case 1467:
case 2741:
case 2329:
case 3073:
case 3837:
case 370:
case 2291:
case 3115:
case 1331:
case 941:
case 2836:
case 26:
case 2989:
case 1004:
case 2259:
case 2944:
case 1810:
case 1991:
case 4061:
case 2178:
case 142:
case 1959:
case 1088:
case 1289:
case 2557:
case 2535:
case 331:
case 4016:
case 3602:
case 1756:
case 444:
case 3375:
case 1621:
case 2318:
case 2101:
case 848:
case 3855:
case 3947:
case 3262:
case 150:
case 1070:
case 925:
case 2584:
case 1262:
case 2007:
case 2645:
case 2122:
case 3006:
case 430:
case 737:
case 2247:
case 3150:
case 3621:
case 2962:
case 3756:
case 2885:
case 2757:
case 785:
case 3246:
case 131:
case 3088:
case 711:
case 3244:
case 963:
case 471:
case 623:
case 3754:
case 1153:
case 3587:
case 3331:
case 1115:
case 1837:
case 170:
case 2571:
case 2183:
case 1278:
case 3598:
case 397:
case 1079:
case 1616:
case 259:
case 1159:
case 3097:
case 3012:
case 3283:
case 3436:
case 2096:
case 2630:
case 3222:
case 3434:
case 651:
case 1819:
case 3352:
case 644:
case 2980:
case 1:
case 1485:
case 1798:
case 2320:
case 1614:
case 2901:
case 1872:
case 3485:
case 885:
case 2922:
case 3661:
case 1147:
case 3:
case 1352:
case 3201:
case 2025:
case 3280:
case 2633:
case 1434:
case 837:
case 3950:
case 1222:
case 2215:
case 1953:
case 1436:
case 1283:
case 524:
case 1097:
case 791:
case 671:
case 2468:
case 2983:
case 282:
case 1915:
case 4002:
case 3079:
case 500:
case 1598:
case 3278:
case 2743:
case 990:
case 1333:
case 492:
case 2087:
case 1177:
case 1765:
case 358:
case 438:
case 612:
case 1707:
case 3086:
case 183:
case 2293:
case 2652:
case 1057:
case 3427:
case 416:
case 2588:
case 3866:
case 834:
case 3008:
case 2424:
case 3990:
case 2232:
case 1317:
case 1392:
case 275:
case 3864:
case 1932:
case 194:
case 3049:
case 2570:
case 2773:
case 3507:
case 3248:
case 3669:
case 2103:
case 2506:
case 3758:
case 3565:
case 378:
case 2704:
case 1669:
case 1248:
case 2174:
case 2909:
case 3932:
case 4018:
case 1864:
case 3317:
case 852:
case 1990:
case 3623:
case 1811:
case 1008:
case 4060:
case 756:
case 2314:
case 79:
case 1151:
case 647:
case 1620:
case 2361:
case 255:
case 1427:
case 3707:
case 2176:
case 1086:
case 1071:
case 2770:
case 3558:
case 3765:
case 2706:
case 3177:
case 4029:
case 434:
case 2667:
case 816:
case 4095:
case 472:
case 3046:
case 2605:
case 917:
case 2047:
case 712:
case 2509:
case 3532:
case 354:
case 1642:
case 163:
case 892:
case 1125:
case 905:
case 1590:
case 3270:
case 2418:
case 1062:
case 838:
case 796:
case 3869:
case 75:
case 3196:
case 1273:
case 3593:
case 489:
case 2112:
case 2197:
case 2429:
case 132:
case 174:
case 1732:
case 3958:
case 3089:
case 125:
case 1611:
case 3823:
case 1958:
case 1664:
case 3732:
case 2463:
case 2258:
case 1204:
case 2748:
case 1196:
case 2091:
case 656:
case 1869:
case 3793:
case 3062:
case 1194:
case 440:
case 942:
case 1270:
case 3125:
case 363:
case 3642:
case 1206:
case 1666:
case 4024:
case 154:
case 1046:
case 3882:
case 2906:
case 377:
case 2830:
case 1074:
case 3715:
case 3243:
case 3753:
case 1816:
case 2108:
case 2311:
case 1553:
case 2051:
case 1338:
case 93:
case 4010:
case 1240:
case 2099:
case 1861:
case 744:
case 2186:
case 4068:
case 157:
case 3187:
case 4037:
case 3998:
case 129:
case 357:
case 2833:
case 730:
case 437:
case 3076:
case 3861:
case 2157:
case 299:
case 1439:
case 3240:
case 1305:
case 3338:
case 3750:
case 3814:
case 2421:
case 1672:
case 485:
case 1550:
case 909:
case 528:
case 3816:
case 3154:
case 4013:
case 691:
case 1715:
case 110:
case 3074:
case 2943:
case 823:
case 1003:
case 14:
case 1009:
case 390:
case 2254:
case 2984:
case 1547:
case 958:
case 2789:
case 28:
case 2908:
case 1249:
case 2090:
case 1668:
case 4028:
case 448:
case 3559:
case 1286:
case 3591:
case 1198:
case 3987:
case 2140:
case 1821:
case 3257:
case 3327:
case 851:
case 2256:
case 844:
case 3802:
case 1802:
case 1747:
case 978:
case 2589:
case 1613:
case 2414:
case 3821:
case 3198:
case 1987:
case 2544:
case 3956:
case 3271:
case 3286:
case 581:
case 2762:
case 2957:
case 1655:
case 1430:
case 3249:
case 220:
case 3048:
case 491:
case 2416:
case 1235:
case 3610:
case 3547:
case 3009:
case 4072:
case 2032:
case 871:
case 204:
case 3080:
case 1107:
case 2574:
case 792:
case 3452:
case 3334:
case 1777:
case 1165:
case 896:
case 2420:
case 3994:
case 3751:
case 3626:
case 1925:
case 3860:
case 2627:
case 281:
case 3799:
case 476:
case 1599:
case 3279:
case 689:
case 215:
case 520:
case 1863:
case 1695:
case 3996:
case 3624:
case 2469:
case 1212:
case 504:
case 3577:
case 118:
case 3158:
case 566:
case 769:
case 2296:
case 2774:
case 1829:
case 318:
case 2979:
case 1577:
case 3212:
case 3551:
case 2188:
case 3599:
case 640:
case 1799:
case 1241:
case 3925:
case 2482:
case 4064:
case 61:
case 3385:
case 1994:
case 2941:
case 1001:
case 2106:
case 87:
case 3107:
case 2170:
case 1080:
case 3215:
case 1630:
case 2191:
case 1369:
case 1096:
case 327:
case 3468:
case 3983:
case 3617:
case 382:
case 4039:
case 3323:
case 2616:
case 3743:
case 3410:
case 246:
case 2041:
case 1413:
case 3382:
case 1320:
case 3922:
case 745:
case 558:
case 1980:
case 853:
case 379:
case 2201:
case 40:
case 1094:
case 3094:
case 1162:
case 888:
case 3455:
case 1025:
case 179:
case 2147:
case 484:
case 583:
case 3413:
case 3901:
case 1743:
case 721:
case 297:
case 3189:
case 493:
case 182:
case 1983:
case 613:
case 3437:
case 2012:
case 873:
case 981:
case 2283:
case 3369:
case 439:
case 1215:
case 3314:
case 1867:
case 920:
case 3361:
case 1588:
case 2057:
case 1805:
case 2707:
case 3573:
case 966:
case 3100:
case 2765:
case 3706:
case 2177:
case 1504:
case 867:
case 3704:
case 1506:
case 597:
case 3909:
case 100:
case 2932:
case 294:
case 3290:
case 3495:
case 4075:
case 3788:
case 2317:
case 1232:
case 3054:
case 2623:
case 1424:
case 1948:
case 2811:
case 1316:
case 375:
case 2864:
case 546:
case 2049:
case 3773:
case 1174:
case 3103:
case 2758:
case 5:
case 1706:
case 3087:
case 1100:
case 1770:
case 4031:
case 2071:
case 1181:
case 1573:
case 3652:
case 2199:
case 155:
case 2866:
case 1056:
case 3426:
case 880:
case 635:
case 2725:
case 3442:
case 3597:
case 3512:
case 460:
case 3321:
case 1675:
case 3098:
case 2438:
case 2977:
case 687:
case 3900:
case 1466:
case 1302:
case 3981:
case 1827:
case 161:
case 3976:
case 2132:
case 1464:
case 2895:
case 214:
case 2663:
case 3109:
case 2043:
case 1411:
case 1903:
case 3148:
case 4052:
case 2594:
case 601:
case 1797:
case 1712:
case 2629:
case 2796:
case 3541:
case 3411:
case 1974:
case 1109:
case 1251:
case 2660:
case 2339:
case 2467:
case 1741:
case 3579:
case 2826:
case 550:
case 3675:
case 1321:
case 2618:
case 2281:
case 2276:
case 2951:
case 82:
case 1512:
case 1597:
case 1442:
case 2999:
case 242:
case 1178:
case 2088:
case 53:
case 1708:
case 2754:
case 2991:
case 386:
case 1944:
case 2587:
case 3428:
case 1749:
case 3586:
case 1329:
case 3549:
case 1180:
case 753:
case 3007:
case 3419:
case 2006:
case 1834:
case 1318:
case 60:
case 2621:
case 2756:
case 3757:
case 1639:
case 231:
case 1757:
case 802:
case 2602:
case 764:
case 995:
case 4017:
case 1885:
case 2554:
case 1247:
case 3318:
case 1065:
case 2787:
case 3946:
case 1122:
case 2947:
case 1419:
case 3786:
case 684:
case 3329:
case 693:
case 1571:
case 3749:
case 2115:
case 413:
case 108:
case 1428:
case 217:
case 3989:
case 3058:
case 36:
case 3944:
case 2556:
case 2153:
case 3708:
case 639:
case 1735:
case 3178:
case 205:
case 1363:
case 3557:
case 3935:
case 2759:
case 1090:
case 2791:
case 320:
case 1562:
case 2284:
case 1908:
case 2048:
case 1324:
case 3546:
case 1744:
case 2009:
case 1254:
case 304:
case 3032:
case 2492:
case 3461:
case 653:
case 1986:
case 1326:
case 1140:
case 3589:
case 3414:
case 2198:
case 445:
case 70:
case 2956:
case 3093:
case 319:
case 3845:
case 1957:
case 119:
case 1287:
case 664:
case 768:
case 1544:
case 3746:
case 2613:
case 688:
case 1414:
case 3971:
case 3839:
case 784:
case 2802:
case 1461:
case 1032:
case 3949:
case 793:
case 1395:
case 518:
case 3984:
case 673:
case 421:
case 1143:
case 1546:
case 3744:
case 3562:
case 120:
case 3090:
case 2430:
case 739:
case 813:
case 1935:
case 826:
case 3482:
case 1313:
case 722:
case 667:
case 3700:
case 2022:
case 3294:
case 2107:
case 3776:
case 3170:
case 1173:
case 1576:
case 1015:
case 1500:
case 107:
case 2297:
case 1703:
case 1469:
case 3423:
case 1053:
case 4005:
case 1912:
case 1997:
case 115:
case 701:
case 4067:
case 2279:
case 315:
case 4038:
case 2996:
case 3053:
case 2624:
case 2577:
case 3703:
case 1979:
case 2158:
case 3500:
case 1368:
case 3576:
case 3574:
case 1294:
case 1776:
case 1941:
case 3225:
case 1700:
case 3420:
case 2751:
case 2994:
case 1482:
case 3875:
case 2799:
case 1548:
case 2793:
case 2062:
case 1207:
case 2590:
case 1852:
case 467:
case 2642:
case 263:
case 3319:
case 835:
case 680:
case 1509:
case 2907:
case 1605:
case 908:
case 726:
case 1047:
case 2882:
case 3906:
case 3638:
case 2965:
case 1667:
case 225:
case 3904:
case 2823:
case 298:
case 4027:
case 801:
case 3463:
case 3709:
case 1973:
case 232:
case 128:
case 3059:
case 1429:
case 3091:
case 2790:
case 1091:
case 1988:
case 3429:
case 395:
case 328:
case 649:
case 1709:
case 2664:
case 1179:
case 2089:
case 2958:
case 1141:
case 3667:
case 3372:
case 1906:
case 1638:
case 2046:
case 2475:
case 3605:
case 96:
case 3047:
case 241:
case 62:
case 254:
case 2532:
case 1319:
case 2206:
case 3852:
case 2270:
case 3207:
case 2194:
case 3548:
case 1311:
case 943:
case 2154:
case 1364:
case 362:
case 3817:
case 3783:
case 2074:
case 1184:
case 1522:
case 1830:
case 3501:
case 80:
case 2998:
case 3077:
case 1940:
case 3833:
case 1701:
case 541:
case 453:
case 333:
case 2619:
case 3722:
case 4036:
case 1402:
case 3157:
case 1366:
case 3578:
case 1298:
case 3421:
case 1051:
case 464:
case 2367:
case 1421:
case 3298:
case 1578:
case 884:
case 1722:
case 488:
case 3583:
case 3171:
case 133:
case 3940:
case 1833:
case 1077:
case 532:
case 277:
case 1501:
case 24:
case 2003:
case 3830:
case 3184:
case 839:
case 713:
case 210:
case 3149:
case 1892:
case 1817:
case 2928:
case 3643:
case 316:
case 2388:
case 392:
case 3459:
case 1029:
case 458:
case 1358:
case 3491:
case 2031:
case 1136:
case 4086:
case 4049:
case 1219:
case 2306:
case 4008:
case 948:
case 2919:
case 3272:
case 1592:
case 2850:
case 1640:
case 2714:
case 2698:
case 3185:
case 539:
case 2075:
case 1185:
case 2516:
case 3640:
case 1272:
case 832:
case 874:
case 201:
case 3447:
case 2155:
case 478:
case 3219:
case 3801:
case 593:
case 718:
case 2972:
case 1365:
case 1530:
case 3533:
case 3358:
case 3228:
case 1883:
case 3029:
case 863:
case 1063:
case 1717:
case 1643:
case 2853:
case 222:
case 1967:
case 2400:
case 501:
case 1242:
case 3938:
case 3477:
case 877:
case 2569:
case 1905:
case 810:
case 2607:
case 2045:
case 2476:
case 605:
case 670:
case 2942:
case 1127:
case 2267:
case 3021:
case 2343:
case 903:
case 284:
case 3809:
case 3552:
case 522:
case 268:
case 3604:
case 829:
case 2769:
case 857:
case 2911:
case 2658:
case 2964:
case 956:
case 3673:
case 1552:
case 4041:
case 1688:
case 365:
case 1211:
case 650:
case 4:
case 2720:
case 3451:
case 2966:
case 642:
case 99:
case 3905:
case 3752:
case 323:
case 3967:
case 1105:
case 405:
case 1775:
case 3014:
case 3641:
case 934:
case 3493:
case 74:
case 777:
case 470:
case 972:
case 3881:
case 130:
case 3874:
case 1697:
case 1612:
case 2995:
case 1803:
case 3731:
case 729:
case 2518:
case 3575:
case 1295:
case 560:
case 431:
case 3016:
case 3679:
case 989:
case 2092:
case 344:
case 2409:
case 3224:
case 2017:
case 2560:
case 351:
case 151:
case 1224:
case 2164:
case 1432:
case 1354:
case 1679:
case 2308:
case 952:
case 3803:
case 4070:
case 2696:
case 2384:
case 1874:
case 2386:
case 4004:
case 1881:
case 3927:
case 2371:
case 2926:
case 3531:
case 3387:
case 1641:
case 2851:
case 0:
case 940:
case 442:
case 371:
case 2899:
case 1415:
case 2483:
case 2236:
case 1396:
case 1069:
case 2891:
case 147:
case 17:
case 1268:
case 1889:
case 1608:
case 2654:
case 1453:
case 1844:
case 754:
case 4040:
case 3539:
case 741:
case 1739:
case 1020:
case 3450:
case 2656:
case 2341:
case 35:
case 3862:
case 43:
case 2234:
case 3745:
case 1686:
case 2422:
case 1745:
case 1325:
case 2480:
case 15:
case 3394:
case 1985:
case 836:
case 798:
case 513:
case 725:
case 3020:
case 1450:
case 2285:
case 732:
case 937:
case 1657:
case 2702:
case 226:
case 112:
case 2478:
case 683:
case 3844:
case 1023:
case 3608:
case 2521:
case 409:
case 37:
case 1237:
case 3415:
case 3117:
case 1689:
case 2513:
case 2116:
case 2854:
case 2443:
case 376:
case 1130:
case 545:
case 4080:
case 1736:
case 1849:
case 654:
case 2374:
case 2659:
case 22:
case 2768:
case 2300:
case 83:
case 3133:
case 2921:
case 1734:
case 3202:
case 3498:
case 2856:
case 1351:
case 1646:
case 3066:
case 3399:
case 814:
case 1945:
case 2005:
case 356:
case 3351:
case 3646:
case 2510:
case 2067:
case 1202:
case 4083:
case 698:
case 965:
case 2755:
case 2568:
case 418:
case 521:
case 103:
case 1042:
case 3871:
case 3884:
case 2737:
case 3849:
case 3130:
case 176:
case 3011:
case 39:
case 1192:
case 1117:
case 663:
case 191:
case 3407:
case 3676:
case 3681:
case 2470:
case 2677:
case 1975:
case 490:
case 2524:
case 64:
case 221:
case 677:
case 610:
case 938:
case 1727:
case 805:
case 2795:
case 2488:
case 3527:
case 831:
case 3931:
case 2526:
case 3879:
case 969:
case 348:
case 1458:
case 2404:
case 3359:
case 3674:
case 1897:
case 1812:
case 2963:
case 3812:
case 3897:
case 2473:
case 1674:
case 850:
case 1229:
case 3603:
case 2896:
case 3458:
case 1391:
case 1931:
case 3263:
case 1527:
case 2699:
case 746:
case 1260:
case 2346:
case 2918:
case 2726:
case 3072:
case 1465:
case 1600:
case 1218:
case 4048:
case 1019:
case 2960:
case 897:
case 1175:
case 2085:
case 3350:
case 1013:
case 996:
case 111:
case 705:
case 1705:
case 3220:
case 44:
case 1055:
case 3425:
case 273:
case 2807:
case 690:
case 2322:
case 4003:
case 2252:
case 2693:
case 1494:
case 717:
case 2982:
case 410:
case 912:
case 1496:
case 2923:
case 3804:
case 429:
case 3068:
case 2632:
case 2566:
case 2163:
case 95:
case 3505:
case 3010:
case 206:
case 1538:
case 2479:
case 1353:
case 3567:
case 1567:
case 2711:
case 3538:
case 2378:
case 385:
case 1609:
case 1888:
case 3223:
case 2764:
case 2497:
case 3037:
case 4000:
case 2542:
case 3873:
case 1068:
case 2690:
case 337:
case 4081:
case 2858:
case 2036:
case 4076:
case 1648:
case 2118:
case 1806:
case 4074:
case 1870:
case 2380:
case 3055:
case 1425:
case 97:
case 947:
case 311:
case 3282:
case 3767:
case 846:
case 1350:
case 3175:
case 2348:
case 1390:
case 2916:
case 2230:
case 2309:
case 1216:
case 334:
case 4046:
case 3095:
case 2435:
case 441:
case 553:
case 454:
case 2572:
case 3843:
case 2121:
case 1840:
case 3456:
case 4089:
case 2457:
case 1139:
case 152:
case 1680:
case 3393:
case 944:
case 1487:
case 2914:
case 951:
case 636:
case 3487:
case 1393:
case 1622:
case 894:
case 1145:
case 2471:
case 3680:
case 3139:
case 498:
case 2102:
case 2772:
case 1456:
case 474:
case 432:
case 1933:
case 573:
case 618:
case 3930:
case 2292:
case 1454:
case 2653:
case 3024:
case 2408:
case 3678:
case 172:
case 3216:
case 2519:
case 1683:
case 2484:
case 1917:
case 1992:
case 463:
case 564:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1743480002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,];
var gg_b = "1743480002/";

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
