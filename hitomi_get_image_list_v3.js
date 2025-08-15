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
case 3009:
case 348:
case 3685:
case 1661:
case 1798:
case 531:
case 2538:
case 159:
case 1881:
case 1301:
case 3990:
case 1520:
case 1955:
case 3055:
case 618:
case 3500:
case 508:
case 3489:
case 190:
case 300:
case 3321:
case 1103:
case 1271:
case 1029:
case 3819:
case 670:
case 2235:
case 158:
case 1336:
case 1080:
case 3980:
case 3872:
case 2167:
case 3695:
case 349:
case 2077:
case 1400:
case 552:
case 934:
case 509:
case 2533:
case 2740:
case 3128:
case 1945:
case 2211:
case 1914:
case 1824:
case 2053:
case 3804:
case 2471:
case 163:
case 3233:
case 1397:
case 2370:
case 3066:
case 946:
case 2693:
case 49:
case 3238:
case 935:
case 1017:
case 1387:
case 856:
case 467:
case 471:
case 2200:
case 1732:
case 2688:
case 2592:
case 3535:
case 2868:
case 2022:
case 980:
case 2622:
case 3242:
case 2100:
case 407:
case 1326:
case 2088:
case 3138:
case 2523:
case 1617:
case 553:
case 4079:
case 3666:
case 393:
case 103:
case 2313:
case 4012:
case 614:
case 2403:
case 882:
case 3449:
case 504:
case 2225:
case 87:
case 1039:
case 28:
case 1841:
case 3354:
case 3331:
case 3896:
case 2729:
case 2083:
case 3645:
case 3702:
case 569:
case 629:
case 3228:
case 3837:
case 1505:
case 1347:
case 2648:
case 3182:
case 1050:
case 155:
case 1995:
case 1559:
case 1722:
case 3315:
case 3192:
case 2576:
case 1834:
case 586:
case 336:
case 3655:
case 345:
case 628:
case 360:
case 3369:
case 3223:
case 1753:
case 3609:
case 3459:
case 687:
case 1061:
case 615:
case 1373:
case 1408:
case 254:
case 2357:
case 3993:
case 2748:
case 2564:
case 2777:
case 2467:
case 1100:
case 4004:
case 3503:
case 2326:
case 3199:
case 600:
case 3508:
case 1083:
case 3983:
case 3375:
case 2516:
case 370:
case 3755:
case 2841:
case 2039:
case 1403:
case 172:
case 3189:
case 648:
case 203:
case 3998:
case 1098:
case 2743:
case 2530:
case 3709:
case 916:
case 2559:
case 2208:
case 3932:
case 2995:
case 480:
case 3442:
case 438:
case 2347:
case 1717:
case 3230:
case 799:
case 324:
case 2061:
case 1643:
case 2425:
case 3264:
case 262:
case 798:
case 3714:
case 3674:
case 3249:
case 2629:
case 2851:
case 1135:
case 439:
case 2171:
case 2783:
case 4037:
case 3149:
case 1739:
case 2103:
case 3074:
case 290:
case 644:
case 2090:
case 1538:
case 202:
case 2881:
case 259:
case 795:
case 3943:
case 314:
case 971:
case 2310:
case 3130:
case 1533:
case 2589:
case 2788:
case 1167:
case 1632:
case 446:
case 3116:
case 99:
case 926:
case 1761:
case 3492:
case 2397:
case 3953:
case 1053:
case 794:
case 3289:
case 537:
case 2639:
case 660:
case 520:
case 328:
case 3879:
case 2945:
case 1683:
case 3299:
case 3812:
case 3922:
case 1592:
case 2807:
case 2387:
case 1688:
case 3795:
case 1693:
case 2017:
case 1370:
case 1058:
case 1902:
case 3002:
case 3353:
case 1769:
case 3773:
case 3613:
case 3281:
case 4067:
case 2631:
case 2507:
case 1675:
case 1219:
case 696:
case 3134:
case 1892:
case 62:
case 3871:
case 494:
case 2524:
case 1563:
case 2427:
case 1970:
case 357:
case 3358:
case 923:
case 2366:
case 1302:
case 1882:
case 443:
case 2606:
case 3747:
case 878:
case 1196:
case 2591:
case 288:
case 230:
case 1374:
case 2644:
case 3224:
case 2465:
case 266:
case 1731:
case 2309:
case 3343:
case 735:
case 746:
case 777:
case 761:
case 2901:
case 3377:
case 2472:
case 3757:
case 1838:
case 289:
case 4025:
case 2820:
case 2446:
case 2910:
case 2936:
case 495:
case 2437:
case 1156:
case 1876:
case 2551:
case 3107:
case 1842:
case 1286:
case 739:
case 2947:
case 498:
case 1784:
case 837:
case 701:
case 3797:
case 2973:
case 1104:
case 2805:
case 780:
case 738:
case 2179:
case 2621:
case 2044:
case 1918:
case 3018:
case 3393:
case 3:
case 1828:
case 1062:
case 3670:
case 2486:
case 15:
case 3736:
case 1146:
case 2816:
case 3191:
case 3388:
case 2926:
case 61:
case 1721:
case 1119:
case 50:
case 3234:
case 3251:
case 2054:
case 3803:
case 3383:
case 1075:
case 1913:
case 3398:
case 111:
case 632:
case 1823:
case 3181:
case 874:
case 2684:
case 3047:
case 3350:
case 1978:
case 2286:
case 3636:
case 2842:
case 1437:
case 1395:
case 2156:
case 556:
case 413:
case 2296:
case 1859:
case 32:
case 3915:
case 1015:
case 3825:
case 396:
case 1805:
case 1385:
case 3361:
case 2104:
case 1069:
case 3601:
case 1816:
case 3026:
case 2172:
case 1926:
case 942:
case 3867:
case 1541:
case 852:
case 3057:
case 1957:
case 4071:
case 2237:
case 2062:
case 1006:
case 3906:
case 1830:
case 707:
case 211:
case 2913:
case 333:
case 840:
case 2823:
case 3697:
case 1054:
case 1849:
case 950:
case 808:
case 2892:
case 2744:
case 3835:
case 2219:
case 1314:
case 726:
case 868:
case 3556:
case 276:
case 247:
case 1404:
case 805:
case 2265:
case 1997:
case 221:
case 3527:
case 4008:
case 767:
case 2479:
case 1084:
case 43:
case 1456:
case 2662:
case 3317:
case 995:
case 2137:
case 1606:
case 3504:
case 4003:
case 2882:
case 3657:
case 412:
case 2563:
case 3994:
case 2246:
case 1524:
case 1427:
case 1987:
case 591:
case 1419:
case 2833:
case 332:
case 3001:
case 1901:
case 64:
case 582:
case 3390:
case 2204:
case 3673:
case 3481:
case 1465:
case 2731:
case 2754:
case 166:
case 141:
case 57:
case 2196:
case 3921:
case 1021:
case 2374:
case 1899:
case 1212:
case 3380:
case 1446:
case 6:
case 351:
case 1472:
case 3647:
case 853:
case 3678:
case 3718:
case 2874:
case 37:
case 3311:
case 2131:
case 1019:
case 3919:
case 3829:
case 844:
case 3401:
case 1421:
case 1389:
case 3965:
case 382:
case 1981:
case 4032:
case 101:
case 391:
case 1510:
case 3436:
case 2786:
case 551:
case 1637:
case 1162:
case 3118:
case 2338:
case 1320:
case 3972:
case 1072:
case 3091:
case 1399:
case 3946:
case 3410:
case 3660:
case 207:
case 1004:
case 4088:
case 955:
case 836:
case 4093:
case 2963:
case 3641:
case 216:
case 1924:
case 3024:
case 3594:
case 845:
case 2392:
case 2968:
case 75:
case 2012:
case 3487:
case 4083:
case 2737:
case 3584:
case 1027:
case 1597:
case 48:
case 3986:
case 1086:
case 2513:
case 902:
case 3426:
case 2462:
case 2612:
case 3531:
case 3607:
case 1941:
case 29:
case 2215:
case 3624:
case 226:
case 776:
case 1526:
case 1349:
case 2679:
case 2719:
case 1364:
case 2269:
case 721:
case 271:
case 1431:
case 892:
case 1454:
case 2765:
case 2194:
case 2342:
case 3447:
case 1712:
case 473:
case 3478:
case 4043:
case 3691:
case 3937:
case 1037:
case 1262:
case 963:
case 3170:
case 3681:
case 1665:
case 146:
case 177:
case 1305:
case 1444:
case 135:
case 3325:
case 596:
case 52:
case 1359:
case 2231:
case 4077:
case 3763:
case 2316:
case 1352:
case 3791:
case 463:
case 1462:
case 2406:
case 3278:
case 1328:
case 2330:
case 2086:
case 973:
case 2627:
case 3893:
case 2431:
case 1475:
case 1765:
case 2557:
case 691:
case 2364:
case 1269:
case 682:
case 3562:
case 3898:
case 1121:
case 1679:
case 1719:
case 2349:
case 2096:
case 2941:
case 19:
case 3413:
case 1215:
case 126:
case 1727:
case 2573:
case 490:
case 789:
case 1206:
case 3707:
case 459:
case 3832:
case 1231:
case 1254:
case 730:
case 2275:
case 2779:
case 766:
case 2951:
case 741:
case 458:
case 2305:
case 4080:
case 1184:
case 2415:
case 2665:
case 815:
case 246:
case 1704:
case 277:
case 261:
case 683:
case 825:
case 1333:
case 3843:
case 1284:
case 2809:
case 2389:
case 717:
case 818:
case 2536:
case 2175:
case 280:
case 1874:
case 1154:
case 3741:
case 462:
case 3126:
case 3287:
case 4061:
case 98:
case 2162:
case 972:
case 1106:
case 2320:
case 2501:
case 1338:
case 3157:
case 3877:
case 819:
case 2924:
case 116:
case 36:
case 1963:
case 3063:
case 1115:
case 2814:
case 1144:
case 4040:
case 2845:
case 3734:
case 454:
case 2587:
case 1079:
case 824:
case 1570:
case 107:
case 3853:
case 784:
case 4039:
case 2597:
case 1382:
case 2866:
case 3178:
case 3858:
case 3147:
case 656:
case 3912:
case 1012:
case 2056:
case 3470:
case 3760:
case 2907:
case 3255:
case 1603:
case 528:
case 668:
case 2324:
case 686:
case 3759:
case 1161:
case 3209:
case 2566:
case 3705:
case 1982:
case 4031:
case 1150:
case 3553:
case 2277:
case 1870:
case 669:
case 529:
case 1422:
case 1280:
case 1608:
case 2545:
case 2887:
case 3652:
case 1368:
case 2132:
case 2417:
case 2667:
case 3312:
case 2253:
case 3577:
case 604:
case 84:
case 3764:
case 3548:
case 2381:
case 374:
case 3033:
case 113:
case 2198:
case 298:
case 1443:
case 1139:
case 3214:
case 2703:
case 485:
case 3642:
case 1448:
case 2391:
case 4069:
case 2999:
case 2708:
case 8:
case 2258:
case 2480:
case 911:
case 3730:
case 4015:
case 3038:
case 406:
case 1217:
case 2193:
case 1432:
case 3638:
case 430:
case 4021:
case 976:
case 3076:
case 1976:
case 2360:
case 758:
case 1942:
case 489:
case 1239:
case 2351:
case 1735:
case 3145:
case 2611:
case 2283:
case 2461:
case 2298:
case 3633:
case 2905:
case 295:
case 524:
case 664:
case 1493:
case 1700:
case 2067:
case 2440:
case 1008:
case 3583:
case 1952:
case 1180:
case 3028:
case 3862:
case 3598:
case 609:
case 652:
case 2930:
case 519:
case 2148:
case 3720:
case 2857:
case 1488:
case 3789:
case 3023:
case 112:
case 3593:
case 2964:
case 1190:
case 763:
case 665:
case 640:
case 3109:
case 1483:
case 1671:
case 1711:
case 3692:
case 1129:
case 378:
case 518:
case 3875:
case 1003:
case 2949:
case 2942:
case 1288:
case 3699:
case 1878:
case 1847:
case 1585:
case 1158:
case 2117:
case 3620:
case 1873:
case 637:
case 773:
case 3550:
case 195:
case 1153:
case 3689:
case 223:
case 3869:
case 545:
case 2735:
case 620:
case 1611:
case 1771:
case 3925:
case 1595:
case 386:
case 1351:
case 1334:
case 447:
case 476:
case 3738:
case 2250:
case 3386:
case 3806:
case 1930:
case 353:
case 1826:
case 1440:
case 2952:
case 3016:
case 2493:
case 2700:
case 3539:
case 2003:
case 1949:
case 3396:
case 3049:
case 3854:
case 1341:
case 2671:
case 2129:
case 1143:
case 832:
case 2261:
case 2483:
case 593:
case 3414:
case 3664:
case 45:
case 3304:
case 772:
case 3445:
case 1243:
case 2502:
case 78:
case 4062:
case 3935:
case 1035:
case 2603:
case 3649:
case 3274:
case 411:
case 3894:
case 3742:
case 1132:
case 3616:
case 1545:
case 1307:
case 1887:
case 985:
case 917:
case 3327:
case 1248:
case 2870:
case 4075:
case 678:
case 3319:
case 1490:
case 142:
case 308:
case 1183:
case 500:
case 2443:
case 1011:
case 3911:
case 592:
case 3365:
case 213:
case 2933:
case 331:
case 581:
case 1253:
case 340:
case 833:
case 1989:
case 3723:
case 2217:
case 309:
case 984:
case 3590:
case 679:
case 3752:
case 549:
case 1999:
case 3529:
case 1222:
case 1188:
case 2477:
case 1555:
case 2767:
case 1000:
case 3900:
case 150:
case 1391:
case 3627:
case 2893:
case 948:
case 3086:
case 2278:
case 1426:
case 757:
case 428:
case 981:
case 1367:
case 900:
case 2668:
case 3316:
case 415:
case 2308:
case 1531:
case 1554:
case 429:
case 1839:
case 2663:
case 2413:
case 4002:
case 3349:
case 3096:
case 949:
case 2883:
case 183:
case 2898:
case 2101:
case 2781:
case 3454:
case 3431:
case 584:
case 3604:
case 2832:
case 156:
case 3960:
case 1060:
case 3646:
case 1515:
case 414:
case 1691:
case 2187:
case 1544:
case 1478:
case 3712:
case 1447:
case 1937:
case 3037:
case 1569:
case 3573:
case 346:
case 377:
case 2197:
case 3415:
case 3665:
case 3578:
case 335:
case 3885:
case 3305:
case 1034:
case 3779:
case 1763:
case 1473:
case 3275:
case 2741:
case 3536:
case 3175:
case 338:
case 380:
case 626:
case 3019:
case 541:
case 3809:
case 2843:
case 3510:
case 191:
case 1965:
case 3981:
case 1081:
case 1890:
case 2877:
case 2157:
case 854:
case 1118:
case 3637:
case 3162:
case 1521:
case 1091:
case 1300:
case 3072:
case 2126:
case 2287:
case 1410:
case 3399:
case 3046:
case 1946:
case 2853:
case 862:
case 3004:
case 1904:
case 297:
case 2201:
case 2751:
case 3587:
case 1335:
case 1497:
case 3814:
case 1594:
case 2371:
case 3924:
case 26:
case 1007:
case 936:
case 2236:
case 2912:
case 945:
case 1956:
case 960:
case 2068:
case 2858:
case 2147:
case 3866:
case 2210:
case 3597:
case 3686:
case 470:
case 1297:
case 291:
case 3333:
case 872:
case 2890:
case 2965:
case 4095:
case 2081:
case 634:
case 3284:
case 2651:
case 2634:
case 796:
case 2401:
case 72:
case 27:
case 3131:
case 3874:
case 88:
case 2410:
case 2660:
case 2880:
case 2300:
case 2091:
case 1287:
case 2972:
case 2118:
case 3338:
case 445:
case 2436:
case 1157:
case 1848:
case 2270:
case 2335:
case 2497:
case 3115:
case 2641:
case 1371:
case 2594:
case 576:
case 3079:
case 521:
case 661:
case 1853:
case 197:
case 307:
case 2904:
case 1173:
case 3570:
case 1210:
case 1147:
case 3737:
case 2584:
case 1178:
case 3012:
case 3968:
case 493:
case 1470:
case 1236:
case 1575:
case 2607:
case 3746:
case 1888:
case 2554:
case 2367:
case 1668:
case 1791:
case 2840:
case 1278:
case 639:
case 1110:
case 3513:
case 3475:
case 371:
case 511:
case 2506:
case 3269:
case 601:
case 3518:
case 3323:
case 638:
case 2996:
case 680:
case 4066:
case 3719:
case 1303:
case 1883:
case 326:
case 10:
case 39:
case 1663:
case 2624:
case 1257:
case 4055:
case 2850:
case 987:
case 3206:
case 2768:
case 2544:
case 448:
case 3194:
case 1832:
case 492:
case 256:
case 3376:
case 2515:
case 1707:
case 928:
case 2763:
case 2473:
case 1724:
case 3254:
case 3231:
case 71:
case 2051:
case 929:
case 3184:
case 2861:
case 449:
case 2681:
case 2213:
case 1638:
case 41:
case 2620:
case 2337:
case 3117:
case 432:
case 4001:
case 1076:
case 4010:
case 1114:
case 451:
case 2815:
case 700:
case 268:
case 3735:
case 2844:
case 2869:
case 792:
case 781:
case 323:
case 4036:
case 821:
case 2967:
case 1295:
case 3700:
case 3952:
case 2016:
case 3008:
case 1908:
case 3818:
case 2806:
case 699:
case 1598:
case 1028:
case 3488:
case 179:
case 2738:
case 1720:
case 1682:
case 1593:
case 3923:
case 1789:
case 3261:
case 572:
case 1285:
case 1109:
case 2540:
case 2733:
case 4087:
case 178:
case 3129:
case 3498:
case 33:
case 58:
case 2049:
case 1155:
case 698:
case 2854:
case 2831:
case 3003:
case 1875:
case 4057:
case 2274:
case 3603:
case 1255:
case 1092:
case 3992:
case 1971:
case 3071:
case 3502:
case 4026:
case 1558:
case 2304:
case 2884:
case 3161:
case 695:
case 322:
case 793:
case 3870:
case 3150:
case 3422:
case 2327:
case 2616:
case 3608:
case 2894:
case 1312:
case 3368:
case 1474:
case 811:
case 2089:
case 2723:
case 9:
case 1577:
case 231:
case 174:
case 760:
case 4078:
case 3443:
case 2911:
case 745:
case 2821:
case 4047:
case 2659:
case 2409:
case 2580:
case 643:
case 1749:
case 3139:
case 1214:
case 2319:
case 2900:
case 4073:
case 3448:
case 85:
case 2372:
case 2752:
case 2346:
case 2099:
case 2529:
case 1543:
case 1266:
case 94:
case 496:
case 3938:
case 2590:
case 2705:
case 563:
case 623:
case 1517:
case 3897:
case 275:
case 1414:
case 817:
case 1664:
case 3243:
case 164:
case 2185:
case 2558:
case 2209:
case 2092:
case 3324:
case 770:
case 1274:
case 1649:
case 2255:
case 1356:
case 3417:
case 3667:
case 2312:
case 1742:
case 44:
case 4013:
case 3545:
case 1616:
case 996:
case 1466:
case 92:
case 1327:
case 719:
case 3248:
case 2082:
case 2553:
case 3277:
case 1319:
case 3625:
case 590:
case 3183:
case 398:
case 108:
case 1659:
case 274:
case 884:
case 2764:
case 1605:
case 3253:
case 1455:
case 724:
case 1590:
case 3920:
case 3193:
case 3810:
case 1728:
case 2266:
case 2730:
case 2543:
case 3480:
case 3509:
case 3708:
case 1529:
case 3999:
case 2676:
case 1900:
case 558:
case 1372:
case 3288:
case 3450:
case 1699:
case 2076:
case 3847:
case 1561:
case 555:
case 3878:
case 1620:
case 169:
case 2638:
case 1495:
case 395:
case 714:
case 1689:
case 1550:
case 3873:
case 1869:
case 3298:
case 622:
case 562:
case 3771:
case 3611:
case 3461:
case 1792:
case 1844:
case 2145:
case 3959:
case 3351:
case 3595:
case 2532:
case 932:
case 889:
case 2682:
case 3148:
case 2720:
case 1738:
case 729:
case 153:
case 2028:
case 2862:
case 2598:
case 1806:
case 1030:
case 3930:
case 2583:
case 2799:
case 91:
case 3440:
case 2908:
case 1967:
case 3067:
case 3232:
case 2588:
case 1049:
case 2155:
case 728:
case 4070:
case 830:
case 951:
case 2109:
case 715:
case 104:
case 394:
case 3143:
case 503:
case 3439:
case 2789:
case 2023:
case 1064:
case 613:
case 97:
case 2199:
case 1430:
case 1276:
case 3549:
case 497:
case 1242:
case 1886:
case 3777:
case 3617:
case 46:
case 3748:
case 2120:
case 3564:
case 2602:
case 354:
case 1940:
case 3040:
case 982:
case 2709:
case 193:
case 2998:
case 775:
case 225:
case 1449:
case 673:
case 737:
case 3841:
case 838:
case 1464:
case 2423:
case 218:
case 2983:
case 1896:
case 144:
case 1354:
case 2508:
case 2766:
case 2230:
case 3378:
case 1182:
case 2442:
case 3860:
case 2932:
case 3995:
case 1252:
case 3722:
case 3629:
case 2745:
case 1315:
case 1192:
case 160:
case 2674:
case 2714:
case 145:
case 3690:
case 362:
case 1369:
case 3373:
case 3061:
case 1459:
case 1609:
case 1685:
case 2943:
case 3661:
case 214:
case 1009:
case 3909:
case 2164:
case 1865:
case 302:
case 192:
case 359:
case 3103:
case 1321:
case 390:
case 1500:
case 598:
case 1489:
case 2149:
case 3955:
case 2433:
case 1292:
case 3029:
case 1929:
case 3108:
case 1511:
case 1872:
case 3080:
case 550:
case 2116:
case 149:
case 2438:
case 1846:
case 1695:
case 3793:
case 3589:
case 3400:
case 3650:
case 2948:
case 1282:
case 1128:
case 1499:
case 599:
case 3945:
case 956:
case 710:
case 778:
case 3824:
case 287:
case 215:
case 1066:
case 2002:
case 2220:
case 1917:
case 1827:
case 1142:
case 3732:
case 3807:
case 2482:
case 1535:
case 1394:
case 2299:
case 2571:
case 1856:
case 2819:
case 2500:
case 200:
case 89:
case 3974:
case 2321:
case 826:
case 3739:
case 768:
case 2055:
case 1149:
case 2865:
case 456:
case 4060:
case 603:
case 513:
case 281:
case 705:
case 114:
case 3043:
case 373:
case 2009:
case 3533:
case 2128:
case 3740:
case 4034:
case 769:
case 2499:
case 1948:
case 2420:
case 249:
case 3167:
case 2511:
case 2980:
case 1492:
case 1785:
case 662:
case 522:
case 3761:
case 3698:
case 1105:
case 187:
case 1953:
case 3053:
case 115:
case 704:
case 3582:
case 3125:
case 2045:
case 483:
case 3868:
case 1299:
case 2394:
case 1795:
case 3688:
case 1482:
case 2917:
case 129:
case 1220:
case 753:
case 4041:
case 3058:
case 2416:
case 3408:
case 2886:
case 2138:
case 3523:
case 1993:
case 3093:
case 658:
case 1988:
case 3088:
case 1199:
case 3622:
case 2430:
case 3552:
case 3729:
case 1983:
case 3083:
case 118:
case 2645:
case 1259:
case 2354:
case 244:
case 1508:
case 2896:
case 690:
case 2939:
case 53:
case 2567:
case 38:
case 1423:
case 3225:
case 170:
case 2614:
case 2774:
case 2464:
case 4007:
case 2449:
case 125:
case 1189:
case 764:
case 1709:
case 512:
case 659:
case 1998:
case 1216:
case 3267:
case 482:
case 1932:
case 4081:
case 3648:
case 2182:
case 47:
case 3677:
case 3717:
case 709:
case 2702:
case 1230:
case 997:
case 2961:
case 4091:
case 765:
case 124:
case 663:
case 523:
case 731:
case 2369:
case 1264:
case 2223:
case 245:
case 1714:
case 260:
case 2405:
case 2655:
case 2315:
case 920:
case 2168:
case 3876:
case 1332:
case 3156:
case 465:
case 4089:
case 3842:
case 3794:
case 1107:
case 2770:
case 2460:
case 3286:
case 3127:
case 2350:
case 2537:
case 2361:
case 3104:
case 2073:
case 822:
case 452:
case 296:
case 1241:
case 3296:
case 77:
case 3828:
case 3062:
case 3237:
case 974:
case 2340:
case 1670:
case 1260:
case 1736:
case 2867:
case 3172:
case 464:
case 1251:
case 2339:
case 3721:
case 3075:
case 1803:
case 2931:
case 630:
case 3165:
case 1181:
case 2441:
case 14:
case 233:
case 571:
case 627:
case 1701:
case 813:
case 507:
case 3769:
case 823:
case 3479:
case 4016:
case 1353:
case 321:
case 2424:
case 3265:
case 1773:
case 1281:
case 3675:
case 376:
case 516:
case 3892:
case 3744:
case 2835:
case 606:
case 4030:
case 1151:
case 1134:
case 1579:
case 1291:
case 2087:
case 3272:
case 1322:
case 3563:
case 1160:
case 2994:
case 4064:
case 3302:
case 3882:
case 2657:
case 157:
case 1070:
case 3970:
case 2317:
case 1468:
case 1778:
case 1618:
case 83:
case 2921:
case 2811:
case 2572:
case 3731:
case 1141:
case 469:
case 2263:
case 2546:
case 2329:
case 2713:
case 684:
case 232:
case 2001:
case 3833:
case 2491:
case 1377:
case 4059:
case 251:
case 2565:
case 3838:
case 486:
case 405:
case 978:
case 1207:
case 2380:
case 2036:
case 3256:
case 2268:
case 910:
case 3345:
case 3404:
case 479:
case 1527:
case 3997:
case 2463:
case 1424:
case 1984:
case 4052:
case 3606:
case 2747:
case 1317:
case 905:
case 2618:
case 2778:
case 3366:
case 2070:
case 1504:
case 3427:
case 968:
case 3094:
case 4023:
case 2291:
case 1626:
case 3987:
case 1087:
case 611:
case 894:
case 132:
case 501:
case 3669:
case 3419:
case 327:
case 1481:
case 3775:
case 330:
case 3021:
case 580:
case 3644:
case 1572:
case 65:
case 3899:
case 2726:
case 1268:
case 1800:
case 151:
case 1565:
case 3820:
case 3446:
case 1718:
case 1678:
case 1647:
case 3762:
case 3472:
case 3978:
case 1078:
case 1770:
case 1460:
case 964:
case 1636:
case 2107:
case 1168:
case 4033:
case 3395:
case 2332:
case 647:
case 3621:
case 1944:
case 3179:
case 196:
case 2124:
case 2241:
case 1915:
case 3805:
case 3385:
case 535:
case 385:
case 2797:
case 1434:
case 621:
case 577:
case 3926:
case 437:
case 3816:
case 2736:
case 2260:
case 3486:
case 3694:
case 1867:
case 850:
case 420:
case 2710:
case 2670:
case 3006:
case 3830:
case 2018:
case 2393:
case 909:
case 3684:
case 952:
case 3496:
case 384:
case 797:
case 2701:
case 2181:
case 1441:
case 24:
case 1586:
case 2803:
case 2383:
case 3031:
case 1931:
case 4082:
case 1339:
case 2234:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1755223201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,];
var gg_b = "1755223201/";

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
