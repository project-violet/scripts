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
case 2945:
case 640:
case 2088:
case 3569:
case 623:
case 545:
case 210:
case 2661:
case 3117:
case 2852:
case 3957:
case 727:
case 296:
case 3779:
case 3717:
case 1162:
case 2491:
case 1572:
case 1053:
case 3189:
case 3846:
case 1618:
case 2921:
case 3449:
case 1026:
case 4093:
case 1292:
case 1317:
case 1036:
case 263:
case 404:
case 1302:
case 658:
case 55:
case 511:
case 2445:
case 2450:
case 1402:
case 1222:
case 3457:
case 2283:
case 2350:
case 3632:
case 2345:
case 3658:
case 571:
case 753:
case 616:
case 2991:
case 1757:
case 4056:
case 3702:
case 3962:
case 2898:
case 1509:
case 3860:
case 2785:
case 2331:
case 3013:
case 2185:
case 254:
case 1979:
case 3444:
case 1990:
case 2137:
case 995:
case 1384:
case 971:
case 462:
case 3730:
case 463:
case 1646:
case 3686:
case 2737:
case 3818:
case 1451:
case 1596:
case 788:
case 2228:
case 3151:
case 50:
case 1144:
case 2607:
case 787:
case 702:
case 861:
case 1200:
case 470:
case 683:
case 1430:
case 689:
case 165:
case 3944:
case 1711:
case 825:
case 1390:
case 709:
case 2056:
case 1660:
case 3260:
case 1974:
case 2801:
case 1526:
case 2267:
case 1536:
case 1082:
case 2797:
case 3790:
case 3411:
case 469:
case 1072:
case 436:
case 1822:
case 1553:
case 2168:
case 2883:
case 3190:
case 446:
case 2197:
case 1095:
case 3559:
case 546:
case 2700:
case 2849:
case 1128:
case 2651:
case 904:
case 536:
case 1138:
case 2862:
case 2244:
case 1912:
case 295:
case 211:
case 3107:
case 631:
case 569:
case 1063:
case 641:
case 3627:
case 1237:
case 2176:
case 1307:
case 3352:
case 3891:
case 3438:
case 3208:
case 3428:
case 675:
case 3367:
case 2460:
case 3498:
case 3054:
case 570:
case 3831:
case 3821:
case 3398:
case 3071:
case 40:
case 1268:
case 510:
case 3697:
case 235:
case 615:
case 1041:
case 3547:
case 3952:
case 2857:
case 1907:
case 3850:
case 563:
case 3003:
case 1198:
case 3712:
case 1167:
case 1035:
case 872:
case 2040:
case 373:
case 3808:
case 1087:
case 3047:
case 3291:
case 2792:
case 2192:
case 199:
case 1361:
case 313:
case 1837:
case 1943:
case 132:
case 963:
case 962:
case 471:
case 133:
case 3610:
case 3571:
case 860:
case 3161:
case 142:
case 120:
case 2679:
case 3554:
case 2262:
case 2418:
case 3581:
case 2318:
case 3373:
case 166:
case 1101:
case 936:
case 2811:
case 946:
case 2066:
case 1285:
case 3245:
case 1443:
case 3483:
case 969:
case 319:
case 2122:
case 2758:
case 193:
case 3059:
case 1183:
case 2132:
case 1868:
case 1631:
case 2918:
case 3743:
case 3221:
case 2722:
case 20:
case 3301:
case 1089:
case 3049:
case 3634:
case 1234:
case 1404:
case 3624:
case 3153:
case 99:
case 1326:
case 1336:
case 1206:
case 1426:
case 434:
case 1436:
case 2388:
case 2619:
case 1996:
case 780:
case 600:
case 3670:
case 3126:
case 3704:
case 505:
case 4008:
case 3104:
case 2091:
case 2378:
case 1453:
case 2247:
case 3736:
case 417:
case 3680:
case 3240:
case 2478:
case 1280:
case 3255:
case 456:
case 1640:
case 478:
case 2854:
case 3544:
case 1764:
case 93:
case 2871:
case 2021:
case 2031:
case 3615:
case 94:
case 3196:
case 494:
case 2881:
case 1551:
case 1496:
case 3364:
case 3464:
case 2050:
case 2988:
case 3266:
case 1113:
case 1953:
case 2803:
case 1520:
case 1294:
case 206:
case 1530:
case 2008:
case 1880:
case 3709:
case 3969:
case 54:
case 2933:
case 53:
case 2614:
case 647:
case 733:
case 1020:
case 732:
case 256:
case 743:
case 1972:
case 720:
case 742:
case 4091:
case 799:
case 2663:
case 2531:
case 2116:
case 1409:
case 3629:
case 674:
case 3639:
case 2465:
case 2716:
case 2695:
case 1074:
case 1824:
case 244:
case 2393:
case 4045:
case 3011:
case 3469:
case 650:
case 3342:
case 4050:
case 59:
case 2333:
case 3442:
case 1482:
case 3369:
case 2433:
case 406:
case 1299:
case 3699:
case 2591:
case 1472:
case 3562:
case 3782:
case 4031:
case 2281:
case 1742:
case 905:
case 6:
case 1769:
case 2859:
case 1909:
case 2271:
case 3772:
case 1579:
case 88:
case 3182:
case 917:
case 3795:
case 1216:
case 1848:
case 3616:
case 1007:
case 2129:
case 3052:
case 956:
case 978:
case 2139:
case 159:
case 2739:
case 1314:
case 1925:
case 3028:
case 2729:
case 3583:
case 1543:
case 1414:
case 3195:
case 977:
case 1395:
case 1693:
case 3293:
case 3954:
case 868:
case 368:
case 164:
case 128:
case 3981:
case 4018:
case 781:
case 367:
case 1665:
case 3141:
case 1754:
case 1771:
case 2672:
case 3303:
case 1171:
case 3605:
case 2269:
case 1914:
case 1561:
case 152:
case 2060:
case 2799:
case 1103:
case 3098:
case 3371:
case 3454:
case 1703:
case 43:
case 3256:
case 3481:
case 2518:
case 1341:
case 3381:
case 1012:
case 721:
case 3865:
case 187:
case 3177:
case 3959:
case 3598:
case 4046:
case 1747:
case 3787:
case 2626:
case 188:
case 884:
case 3187:
case 1147:
case 2770:
case 3893:
case 3777:
case 2018:
case 2134:
case 2340:
case 2124:
case 3347:
case 2455:
case 1678:
case 1477:
case 1061:
case 2724:
case 3288:
case 3648:
case 2734:
case 1319:
case 4060:
case 3459:
case 517:
case 3359:
case 2546:
case 405:
case 518:
case 23:
case 3001:
case 3073:
case 3823:
case 3552:
case 906:
case 3833:
case 1987:
case 1759:
case 2115:
case 2869:
case 1919:
case 1043:
case 3083:
case 2715:
case 2696:
case 2264:
case 2623:
case 2325:
case 2154:
case 1682:
case 3282:
case 2171:
case 2425:
case 1269:
case 2435:
case 409:
case 1672:
case 2771:
case 2181:
case 2754:
case 3929:
case 105:
case 2656:
case 2963:
case 2441:
case 1518:
case 736:
case 252:
case 2103:
case 1060:
case 1799:
case 2995:
case 746:
case 2543:
case 4061:
case 2414:
case 3532:
case 3522:
case 1739:
case 259:
case 2314:
case 2007:
case 763:
case 667:
case 2216:
case 2848:
case 2363:
case 3429:
case 1609:
case 710:
case 3329:
case 3076:
case 228:
case 403:
case 3804:
case 402:
case 487:
case 2395:
case 2693:
case 3415:
case 3576:
case 13:
case 3934:
case 3613:
case 1213:
case 453:
case 3664:
case 37:
case 3032:
case 1715:
case 3296:
case 2159:
case 3872:
case 1696:
case 3058:
case 1955:
case 1366:
case 1869:
case 31:
case 3394:
case 81:
case 851:
case 1466:
case 3140:
case 3155:
case 3324:
case 1018:
case 3334:
case 3915:
case 3204:
case 3424:
case 288:
case 19:
case 155:
case 427:
case 1170:
case 3236:
case 3226:
case 464:
case 3306:
case 203:
case 1780:
case 1106:
case 2248:
case 3470:
case 459:
case 3370:
case 2061:
case 2419:
case 3994:
case 2678:
case 1355:
case 1124:
case 1706:
case 1653:
case 4007:
case 2936:
case 2164:
case 2551:
case 2926:
case 2574:
case 3659:
case 1259:
case 2215:
case 1854:
case 559:
case 2904:
case 2584:
case 4090:
case 564:
case 2520:
case 3835:
case 3825:
case 1978:
case 2294:
case 106:
case 2113:
case 3527:
case 1803:
case 2899:
case 527:
case 735:
case 1508:
case 2396:
case 3085:
case 1050:
case 1988:
case 2206:
case 2426:
case 4051:
case 987:
case 3188:
case 903:
case 2436:
case 3863:
case 2079:
case 4074:
case 2829:
case 800:
case 2839:
case 3178:
case 3568:
case 3788:
case 2590:
case 2404:
case 2655:
case 4020:
case 1091:
case 2453:
case 1687:
case 1247:
case 3814:
case 1488:
case 3448:
case 711:
case 3219:
case 1677:
case 2996:
case 3277:
case 587:
case 2299:
case 3916:
case 3:
case 70:
case 1433:
case 3603:
case 1203:
case 4002:
case 1635:
case 3235:
case 588:
case 1323:
case 2579:
case 898:
case 2142:
case 850:
case 2517:
case 350:
case 1993:
case 3510:
case 1105:
case 1271:
case 3068:
case 2769:
case 1705:
case 1356:
case 46:
case 3733:
case 1281:
case 3097:
case 3819:
case 3165:
case 117:
case 3037:
case 3793:
case 3027:
case 3877:
case 178:
case 374:
case 874:
case 156:
case 2030:
case 2502:
case 814:
case 959:
case 314:
case 118:
case 3214:
case 1614:
case 2880:
case 177:
case 1545:
case 1550:
case 3295:
case 2824:
case 1393:
case 4079:
case 348:
case 838:
case 509:
case 2239:
case 1465:
case 4089:
case 2309:
case 1956:
case 1521:
case 1365:
case 3976:
case 965:
case 3524:
case 145:
case 1690:
case 3534:
case 706:
case 1360:
case 3506:
case 493:
case 686:
case 2025:
case 1211:
case 2035:
case 875:
case 3611:
case 3570:
case 449:
case 375:
case 2577:
case 3160:
case 2519:
case 439:
case 3580:
case 466:
case 315:
case 815:
case 1857:
case 2063:
case 3515:
case 1100:
case 3476:
case 2912:
case 3817:
case 3039:
case 3029:
case 15:
case 2728:
case 2152:
case 1651:
case 2752:
case 3251:
case 433:
case 432:
case 1446:
case 1862:
case 1674:
case 443:
case 420:
case 442:
case 3889:
case 3146:
case 2608:
case 2014:
case 331:
case 1176:
case 3230:
case 3594:
case 1630:
case 831:
case 3400:
case 921:
case 2407:
case 341:
case 1566:
case 2237:
case 1786:
case 4087:
case 239:
case 2443:
case 2961:
case 619:
case 2701:
case 3422:
case 3657:
case 1257:
case 249:
case 2650:
case 4035:
case 3332:
case 3358:
case 3094:
case 3458:
case 2101:
case 679:
case 1811:
case 3539:
case 1918:
case 2563:
case 2631:
case 1732:
case 2783:
case 1158:
case 2595:
case 1758:
case 3890:
case 292:
case 2868:
case 2897:
case 2827:
case 3922:
case 3932:
case 2943:
case 2461:
case 2019:
case 3830:
case 2525:
case 1192:
case 3070:
case 981:
case 660:
case 2087:
case 2691:
case 3118:
case 1040:
case 3080:
case 3958:
case 673:
case 3649:
case 718:
case 777:
case 3851:
case 3662:
case 1262:
case 1418:
case 2541:
case 1844:
case 3217:
case 242:
case 220:
case 1617:
case 3884:
case 243:
case 778:
case 612:
case 232:
case 233:
case 2210:
case 966:
case 136:
case 3131:
case 3121:
case 2402:
case 2222:
case 2096:
case 3243:
case 1643:
case 3731:
case 4082:
case 3385:
case 2302:
case 1775:
case 858:
case 2157:
case 876:
case 3150:
case 3910:
case 1593:
case 992:
case 2509:
case 1321:
case 1331:
case 3750:
case 465:
case 2989:
case 816:
case 2757:
case 1431:
case 1491:
case 1710:
case 2572:
case 2149:
case 1391:
case 1828:
case 3261:
case 110:
case 2762:
case 1661:
case 1533:
case 1523:
case 1852:
case 1088:
case 3985:
case 1945:
case 2749:
case 2479:
case 932:
case 822:
case 840:
case 2417:
case 933:
case 2379:
case 920:
case 942:
case 2292:
case 3410:
case 2876:
case 830:
case 330:
case 3191:
case 2004:
case 2618:
case 2886:
case 1931:
case 1556:
case 2526:
case 1267:
case 3667:
case 2111:
case 2536:
case 2660:
case 1298:
case 3368:
case 3497:
case 265:
case 2711:
case 1612:
case 2490:
case 2504:
case 599:
case 3397:
case 542:
case 1578:
case 2920:
case 389:
case 532:
case 2072:
case 2822:
case 2832:
case 3937:
case 3843:
case 3548:
case 1588:
case 1768:
case 2858:
case 3005:
case 1908:
case 74:
case 1033:
case 1873:
case 1737:
case 2286:
case 3108:
case 1093:
case 1727:
case 808:
case 2474:
case 2351:
case 3997:
case 2892:
case 980:
case 661:
case 883:
case 383:
case 1065:
case 1137:
case 882:
case 2420:
case 593:
case 3337:
case 3327:
case 592:
case 2430:
case 2144:
case 2320:
case 3861:
case 1607:
case 2330:
case 3652:
case 1408:
case 1228:
case 1238:
case 1308:
case 2596:
case 79:
case 12:
case 36:
case 86:
case 1796:
case 1615:
case 450:
case 3574:
case 1196:
case 498:
case 3164:
case 3936:
case 3551:
case 97:
case 3713:
case 1464:
case 2948:
case 2085:
case 1266:
case 3666:
case 3113:
case 3953:
case 2527:
case 4:
case 951:
case 2835:
case 2825:
case 3294:
case 1694:
case 1913:
case 447:
case 3404:
case 1624:
case 1153:
case 1062:
case 2178:
case 448:
case 3326:
case 3839:
case 200:
case 3336:
case 438:
case 1606:
case 2010:
case 2219:
case 2277:
case 3270:
case 1511:
case 1964:
case 1136:
case 1704:
case 1104:
case 1726:
case 4027:
case 1736:
case 2814:
case 2287:
case 1680:
case 3655:
case 3640:
case 474:
case 2235:
case 4085:
case 694:
case 1442:
case 3482:
case 1866:
case 4075:
case 3372:
case 3299:
case 1699:
case 2:
case 2733:
case 1562:
case 2241:
case 2681:
case 3742:
case 2097:
case 3589:
case 2068:
case 1172:
case 3909:
case 1772:
case 3169:
case 3815:
case 726:
case 3579:
case 1182:
case 250:
case 3517:
case 2193:
case 1709:
case 2585:
case 634:
case 214:
case 1942:
case 3982:
case 3870:
case 901:
case 2819:
case 2316:
case 2793:
case 760:
case 2877:
case 2263:
case 237:
case 656:
case 678:
case 712:
case 1044:
case 1639:
case 247:
case 3239:
case 51:
case 773:
case 551:
case 772:
case 618:
case 3834:
case 400:
case 677:
case 3074:
case 2295:
case 605:
case 3754:
case 2499:
case 2896:
case 2399:
case 9:
case 47:
case 3425:
case 3205:
case 2669:
case 1223:
case 4022:
case 3633:
case 3561:
case 1135:
case 950:
case 1125:
case 1471:
case 2592:
case 852:
case 352:
case 3103:
case 353:
case 3995:
case 1371:
case 3656:
case 1481:
case 3441:
case 3963:
case 2929:
case 2939:
case 2558:
case 1888:
case 1616:
case 201:
case 3007:
case 1573:
case 359:
case 914:
case 859:
case 3314:
case 3935:
case 1028:
case 3925:
case 3543:
case 2853:
case 1195:
case 1903:
case 3395:
case 828:
case 1954:
case 168:
case 938:
case 3941:
case 2836:
case 1714:
case 947:
case 1501:
case 3363:
case 2209:
case 1856:
case 2906:
case 2586:
case 2766:
case 2934:
case 2166:
case 251:
case 3507:
case 63:
case 1823:
case 2394:
case 3987:
case 2882:
case 1947:
case 3759:
case 2058:
case 2494:
case 2500:
case 725:
case 2872:
case 3159:
case 2664:
case 309:
case 2970:
case 1528:
case 547:
case 802:
case 761:
case 1865:
case 1119:
case 2306:
case 303:
case 1177:
case 5:
case 2755:
case 2236:
case 3747:
case 2092:
case 184:
case 2204:
case 888:
case 3512:
case 2324:
case 4076:
case 2334:
case 2915:
case 3487:
case 1447:
case 2380:
case 401:
case 2253:
case 3387:
case 655:
case 4000:
case 598:
case 3678:
case 550:
case 69:
case 2370:
case 597:
case 1648:
case 3319:
case 3302:
case 654:
case 229:
case 2485:
case 2243:
case 3232:
case 2385:
case 1632:
case 2131:
case 2475:
case 3258:
case 2673:
case 2375:
case 3757:
case 636:
case 2601:
case 0:
case 216:
case 1962:
case 2745:
case 257:
case 1013:
case 2910:
case 3917:
case 185:
case 276:
case 258:
case 3157:
case 2048:
case 2985:
case 1569:
case 3800:
case 663:
case 3582:
case 1542:
case 1117:
case 3762:
case 881:
case 381:
case 3902:
case 767:
case 1779:
case 4016:
case 3572:
case 3053:
case 3149:
case 724:
case 1349:
case 3389:
case 3618:
case 1449:
case 670:
case 575:
case 3004:
case 483:
case 2191:
case 1692:
case 610:
case 591:
case 3317:
case 2310:
case 222:
case 3417:
case 125:
case 457:
case 365:
case 2468:
case 865:
case 3984:
case 3711:
case 1944:
case 3504:
case 2368:
case 416:
case 2497:
case 3660:
case 458:
case 2698:
case 3974:
case 476:
case 490:
case 3526:
case 1311:
case 975:
case 1411:
case 429:
case 2005:
case 3822:
case 2927:
case 3553:
case 2937:
case 1190:
case 3930:
case 915:
case 3920:
case 283:
case 3484:
case 3990:
case 1513:
case 207:
case 1676:
case 2997:
case 1344:
case 1720:
case 423:
case 3646:
case 1818:
case 1686:
case 3374:
case 2108:
case 784:
case 2628:
case 1151:
case 3744:
case 1911:
case 4048:
case 2638:
case 1784:
case 2861:
case 3144:
case 161:
case 2207:
case 821:
case 1751:
case 1600:
case 3420:
case 3200:
case 2016:
case 2327:
case 3430:
case 1774:
case 1367:
case 1498:
case 1054:
case 2986:
case 2506:
case 1821:
case 1071:
case 1398:
case 3268:
case 3412:
case 3041:
case 215:
case 635:
case 1112:
case 530:
case 291:
case 2802:
case 1845:
case 2900:
case 645:
case 523:
case 4094:
case 3798:
case 2580:
case 2099:
case 2760:
case 1003:
case 72:
case 186:
case 3875:
case 1928:
case 2570:
case 1712:
case 3095:
case 2889:
case 3128:
case 4006:
case 2486:
case 1967:
case 2644:
case 3912:
case 3152:
case 3728:
case 4024:
case 3063:
case 983:
case 2476:
case 3810:
case 3227:
case 1627:
case 2300:
case 3237:
case 231:
case 4080:
case 590:
case 2594:
case 611:
case 1352:
case 2400:
case 558:
case 695:
case 576:
case 516:
case 1338:
case 671:
case 1438:
case 557:
case 3608:
case 1373:
case 866:
case 3101:
case 2458:
case 3275:
case 78:
case 475:
case 2332:
case 849:
case 3645:
case 1250:
case 1245:
case 582:
case 839:
case 2422:
case 2202:
case 3701:
case 929:
case 2992:
case 990:
case 976:
case 3631:
case 3563:
case 1231:
case 2015:
case 957:
case 1401:
case 3621:
case 179:
case 2539:
case 3173:
case 2529:
case 1301:
case 2118:
case 2599:
case 173:
case 1047:
case 3691:
case 3525:
case 3535:
case 2070:
case 3361:
case 2820:
case 3077:
case 3837:
case 2932:
case 832:
case 923:
case 922:
case 1610:
case 2492:
case 3210:
case 820:
case 842:
case 160:
case 1161:
case 2884:
case 2217:
case 343:
case 589:
case 1554:
case 1901:
case 2851:
case 3541:
case 2024:
case 2874:
case 4039:
case 2649:
case 3100:
case 1476:
case 3244:
case 1817:
case 1376:
case 1029:
case 311:
case 35:
case 1879:
case 85:
case 3651:
case 1486:
case 3862:
case 2967:
case 1274:
case 2998:
case 3960:
case 3346:
case 1386:
case 3700:
case 1146:
case 2438:
case 2428:
case 3776:
case 2891:
case 473:
case 3176:
case 2352:
case 1594:
case 3620:
case 1220:
case 472:
case 680:
case 2627:
case 141:
case 700:
case 3566:
case 4047:
case 2637:
case 3786:
case 925:
case 1976:
case 835:
case 2081:
case 1524:
case 2668:
case 479:
case 845:
case 2831:
case 3360:
case 2821:
case 1506:
case 2367:
case 4059:
case 3460:
case 2938:
case 1570:
case 2712:
case 1611:
case 2003:
case 1160:
case 2850:
case 2845:
case 3555:
case 3540:
case 1099:
case 115:
case 2547:
case 2112:
case 3857:
case 1802:
case 191:
case 213:
case 747:
case 633:
case 632:
case 1718:
case 212:
case 2983:
case 3192:
case 643:
case 1070:
case 642:
case 2047:
case 3792:
case 2291:
case 2973:
case 1118:
case 738:
case 3040:
case 1958:
case 1024:
case 1649:
case 714:
case 3318:
case 1851:
case 2761:
case 3262:
case 2581:
case 699:
case 3844:
case 3617:
case 3679:
case 1006:
case 2571:
case 1492:
case 1432:
case 1422:
case 1202:
case 4003:
case 3257:
case 2383:
case 2685:
case 2250:
case 693:
case 2473:
case 2373:
case 226:
case 2675:
case 1539:
case 279:
case 1529:
case 2231:
case 4081:
case 2743:
case 3722:
case 3158:
case 2221:
case 2401:
case 1890:
case 649:
case 985:
case 7:
case 639:
case 3710:
case 3078:
case 3391:
case 1975:
case 2779:
case 3828:
case 3838:
case 870:
case 2542:
case 2117:
case 310:
case 2957:
case 3523:
case 2569:
case 3950:
case 913:
case 3110:
case 1505:
case 863:
case 701:
case 862:
case 140:
case 1791:
case 2692:
case 2449:
case 2362:
case 1191:
case 2462:
case 2349:
case 2218:
case 336:
case 3991:
case 1375:
case 1131:
case 1516:
case 1121:
case 1683:
case 2632:
case 1731:
case 1385:
case 3350:
case 2357:
case 129:
case 2064:
case 869:
case 190:
case 176:
case 354:
case 1145:
case 1910:
case 3593:
case 3898:
case 3331:
case 1745:
case 2949:
case 2013:
case 979:
case 3421:
case 3201:
case 2702:
case 2818:
case 2686:
case 3727:
case 3093:
case 2720:
case 804:
case 2676:
case 2130:
case 3127:
case 1708:
case 182:
case 2444:
case 3065:
case 107:
case 2513:
case 2600:
case 1016:
case 2774:
case 1861:
case 1437:
case 1427:
case 3252:
case 519:
case 2751:
case 2151:
case 3228:
case 3408:
case 1628:
case 579:
case 2564:
case 2784:
case 3238:
case 2174:
case 3308:
case 3801:
case 3267:
case 1667:
case 2260:
case 1698:
case 485:
case 71:
case 573:
case 751:
case 1368:
case 77:
case 513:
case 1497:
case 3056:
case 2944:
case 1397:
case 665:
case 189:
case 1927:
case 3168:
case 3883:
case 1843:
case 2411:
case 4064:
case 3768:
case 3908:
case 2311:
case 3033:
case 1853:
case 2903:
case 3739:
case 52:
case 628:
case 664:
case 2878:
case 2573:
case 3129:
case 101:
case 722:
case 740:
case 2052:
case 3139:
case 730:
case 2795:
case 1558:
case 2163:
case 627:
case 2616:
case 267:
case 1439:
case 2265:
case 1429:
case 3609:
case 484:
case 1836:
case 1076:
case 2501:
case 1826:
case 2954:
case 1804:
case 2293:
case 1086:
case 3242:
case 3682:
case 2741:
case 1642:
case 4083:
case 2233:
case 2605:
case 1669:
case 652:
case 716:
case 776:
case 758:
case 790:
case 3672:
case 1896:
case 1399:
case 2141:
case 1939:
case 2381:
case 2735:
case 4001:
case 729:
case 3199:
case 2481:
case 3518:
case 3799:
case 2371:
case 2098:
case 2135:
case 2354:
case 2893:
case 1155:
case 284:
case 3604:
case 39:
case 2187:
case 855:
case 3636:
case 2787:
case 1226:
case 1406:
case 3626:
case 2865:
case 3560:
case 2177:
case 2959:
case 1755:
case 3106:
case 3724:
case 603:
case 602:
case 687:
case 782:
case 1370:
case 783:
case 2347:
case 2278:
case 3440:
case 1480:
case 2447:
case 3966:
case 3134:
case 1253:
case 3706:
case 92:
case 1576:
case 83:
case 34:
case 84:
case 2856:
case 1906:
case 4067:
case 3264:
case 1664:
case 2538:
case 2528:
case 1032:
case 1296:
case 1872:
case 3940:
case 3955:
case 1980:
case 1058:
case 1500:
case 3366:
case 3869:
case 151:
case 2552:
case 2823:
case 2947:
case 2606:
case 1188:
case 731:
case 1863:
case 1778:
case 100:
case 2062:
case 2049:
case 1568:
case 3748:
case 1788:
case 1895:
case 2255:
case 2680:
case 3378:
case 3091:
case 2736:
case 3247:
case 3687:
case 2670:
case 2511:
case 1448:
case 2136:
case 2704:
case 3388:
case 1219:
case 1841:
case 791:
case 715:
case 2196:
case 3031:
case 22:
case 2413:
case 524:
case 1835:
case 2266:
case 1527:
case 2464:
case 3988:
case 1085:
case 3045:
case 4011:
case 317:
case 1037:
case 1027:
case 1793:
case 2109:
case 1877:
case 818:
case 318:
case 3933:
case 1214:
case 1905:
case 2840:
case 1193:
case 1765:
case 1585:
case 3550:
case 344:
case 148:
case 924:
case 138:
case 3493:
case 2629:
case 3465:
case 3956:
case 3663:
case 4062:
case 137:
case 3591:
case 2442:
case 3433:
case 4057:
case 1756:
case 3423:
case 1305:
case 2469:
case 1235:
case 2011:
case 3323:
case 1405:
case 3625:
case 394:
case 198:
case 1654:
case 894:
case 2182:
case 3993:
case 3105:
case 2772:
case 1510:
case 3965:
case 42:
case 1733:
case 2562:
case 3281:
case 1681:
case 3456:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1746630002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,];
var gg_b = "1746630002/";

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
