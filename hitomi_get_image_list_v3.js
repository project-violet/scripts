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
case 2860:
case 1315:
case 1125:
case 1458:
case 858:
case 1993:
case 3888:
case 442:
case 945:
case 2349:
case 1825:
case 3062:
case 1975:
case 1772:
case 1754:
case 772:
case 4034:
case 2653:
case 2849:
case 229:
case 3491:
case 1325:
case 3270:
case 768:
case 2656:
case 771:
case 206:
case 974:
case 3084:
case 2360:
case 1815:
case 3004:
case 3497:
case 2059:
case 1748:
case 760:
case 458:
case 305:
case 3666:
case 2178:
case 1779:
case 842:
case 3627:
case 2833:
case 1147:
case 3621:
case 1847:
case 2878:
case 3194:
case 4085:
case 508:
case 2836:
case 384:
case 2378:
case 3617:
case 170:
case 841:
case 1537:
case 2336:
case 334:
case 353:
case 2052:
case 3035:
case 3098:
case 3850:
case 7:
case 1400:
case 3394:
case 3781:
case 1531:
case 1341:
case 928:
case 1726:
case 2614:
case 2391:
case 2784:
case 107:
case 1767:
case 3071:
case 2408:
case 1192:
case 2397:
case 1575:
case 1606:
case 1686:
case 1009:
case 2624:
case 2897:
case 2965:
case 42:
case 2891:
case 1603:
case 2197:
case 1392:
case 2932:
case 2798:
case 1199:
case 490:
case 1294:
case 244:
case 3241:
case 2528:
case 2087:
case 2007:
case 3774:
case 124:
case 3442:
case 1399:
case 99:
case 2946:
case 275:
case 26:
case 1250:
case 1082:
case 1002:
case 1168:
case 2091:
case 1423:
case 3760:
case 2708:
case 1284:
case 1109:
case 2618:
case 1189:
case 3911:
case 346:
case 2484:
case 2261:
case 3371:
case 1889:
case 2223:
case 3917:
case 1809:
case 2404:
case 653:
case 634:
case 3749:
case 547:
case 3871:
case 2628:
case 1262:
case 4012:
case 2216:
case 72:
case 3966:
case 614:
case 605:
case 3927:
case 3877:
case 2213:
case 2462:
case 1416:
case 1503:
case 2956:
case 1235:
case 1298:
case 3452:
case 1802:
case 3474:
case 2440:
case 2498:
case 1068:
case 3778:
case 274:
case 3736:
case 2307:
case 1364:
case 2524:
case 906:
case 2181:
case 2887:
case 245:
case 1696:
case 3251:
case 1099:
case 1675:
case 2469:
case 2514:
case 2801:
case 1382:
case 2750:
case 2107:
case 2187:
case 526:
case 1015:
case 3884:
case 29:
case 1631:
case 4073:
case 3511:
case 2643:
case 459:
case 1472:
case 3517:
case 1758:
case 1637:
case 3289:
case 3209:
case 3184:
case 2272:
case 3362:
case 151:
case 2646:
case 96:
case 2290:
case 3521:
case 741:
case 1448:
case 2477:
case 1744:
case 3384:
case 2060:
case 2632:
case 2471:
case 8:
case 327:
case 471:
case 3162:
case 1490:
case 2359:
case 3088:
case 2152:
case 2174:
case 3140:
case 1903:
case 2556:
case 3282:
case 1357:
case 2279:
case 3369:
case 1351:
case 1906:
case 2553:
case 3840:
case 2924:
case 3198:
case 3135:
case 2852:
case 872:
case 1479:
case 1047:
case 1851:
case 3169:
case 580:
case 3264:
case 2036:
case 1780:
case 871:
case 3398:
case 140:
case 385:
case 868:
case 676:
case 518:
case 1151:
case 3407:
case 769:
case 148:
case 461:
case 478:
case 2453:
case 2732:
case 1256:
case 2935:
case 3018:
case 748:
case 3974:
case 3697:
case 849:
case 3219:
case 3445:
case 3587:
case 150:
case 158:
case 97:
case 373:
case 3324:
case 965:
case 3114:
case 462:
case 3814:
case 2969:
case 38:
case 511:
case 666:
case 878:
case 3417:
case 779:
case 870:
case 1967:
case 1173:
case 1195:
case 1600:
case 1961:
case 1710:
case 1680:
case 31:
case 913:
case 3222:
case 3411:
case 1554:
case 752:
case 1590:
case 1373:
case 3466:
case 862:
case 2962:
case 597:
case 3212:
case 954:
case 1034:
case 933:
case 1376:
case 1395:
case 1913:
case 1548:
case 2535:
case 2345:
case 1406:
case 60:
case 3153:
case 2424:
case 1486:
case 3043:
case 1979:
case 2728:
case 4002:
case 1403:
case 3649:
case 1483:
case 203:
case 3156:
case 2330:
case 1224:
case 3552:
case 4082:
case 190:
case 3987:
case 2414:
case 807:
case 2055:
case 2830:
case 424:
case 3032:
case 3981:
case 2569:
case 2688:
case 2650:
case 1122:
case 2584:
case 2366:
case 717:
case 3642:
case 1312:
case 356:
case 2327:
case 3238:
case 643:
case 2811:
case 2117:
case 3295:
case 4089:
case 2817:
case 3273:
case 2321:
case 1523:
case 2363:
case 2111:
case 792:
case 787:
case 1775:
case 1822:
case 1972:
case 3678:
case 2863:
case 2821:
case 3039:
case 2317:
case 1322:
case 3636:
case 1112:
case 994:
case 557:
case 791:
case 2121:
case 1948:
case 3633:
case 2163:
case 2827:
case 3285:
case 63:
case 1703:
case 3533:
case 3205:
case 1613:
case 3343:
case 1706:
case 1019:
case 3132:
case 1616:
case 2724:
case 254:
case 3536:
case 2662:
case 523:
case 3846:
case 837:
case 3332:
case 724:
case 366:
case 3542:
case 1626:
case 921:
case 891:
case 3056:
case 213:
case 68:
case 696:
case 3843:
case 3659:
case 4068:
case 2604:
case 2066:
case 2293:
case 1496:
case 2508:
case 2027:
case 1958:
case 1493:
case 2021:
case 487:
case 995:
case 673:
case 199:
case 3652:
case 707:
case 3674:
case 3165:
case 491:
case 1944:
case 3991:
case 2011:
case 964:
case 2756:
case 4047:
case 1648:
case 3933:
case 1805:
case 3455:
case 2432:
case 1105:
case 3978:
case 1690:
case 2753:
case 448:
case 3936:
case 440:
case 1:
case 852:
case 1500:
case 2237:
case 1431:
case 762:
case 2443:
case 1580:
case 3730:
case 1437:
case 656:
case 2950:
case 3942:
case 3745:
case 1243:
case 3818:
case 343:
case 2446:
case 2439:
case 3601:
case 3960:
case 3711:
case 3681:
case 1410:
case 2988:
case 3687:
case 160:
case 1558:
case 1239:
case 2210:
case 452:
case 749:
case 168:
case 171:
case 840:
case 1073:
case 1420:
case 3949:
case 159:
case 1265:
case 501:
case 3591:
case 1334:
case 172:
case 1544:
case 30:
case 2220:
case 1038:
case 2465:
case 3727:
case 1095:
case 3422:
case 241:
case 2967:
case 2876:
case 1984:
case 2572:
case 2680:
case 3509:
case 406:
case 2554:
case 121:
case 2600:
case 3589:
case 4059:
case 2138:
case 2961:
case 786:
case 3075:
case 3699:
case 2590:
case 3263:
case 242:
case 3221:
case 3412:
case 1577:
case 2395:
case 2338:
case 122:
case 3093:
case 2720:
case 2376:
case 3502:
case 999:
case 3106:
case 3803:
case 4074:
case 1453:
case 3582:
case 4052:
case 2644:
case 1935:
case 3670:
case 728:
case 3429:
case 1456:
case 3230:
case 3306:
case 250:
case 3957:
case 1743:
case 1969:
case 2731:
case 2005:
case 195:
case 3419:
case 602:
case 3303:
case 1327:
case 1811:
case 311:
case 1650:
case 2793:
case 2122:
case 332:
case 1584:
case 3020:
case 2526:
case 2954:
case 381:
case 2775:
case 623:
case 875:
case 2796:
case 2561:
case 1817:
case 2523:
case 1111:
case 3476:
case 2516:
case 1562:
case 331:
case 75:
case 2112:
case 312:
case 1127:
case 1821:
case 844:
case 1317:
case 2990:
case 3647:
case 2948:
case 2513:
case 3641:
case 1827:
case 397:
case 667:
case 745:
case 3902:
case 2829:
case 3705:
case 1535:
case 1203:
case 2406:
case 1598:
case 1540:
case 972:
case 1330:
case 46:
case 1206:
case 2129:
case 2403:
case 3964:
case 290:
case 960:
case 4087:
case 3557:
case 4007:
case 155:
case 1845:
case 971:
case 968:
case 2475:
case 1588:
case 845:
case 950:
case 1669:
case 302:
case 1066:
case 3776:
case 958:
case 2496:
case 1508:
case 3110:
case 165:
case 3810:
case 1296:
case 1063:
case 2958:
case 1021:
case 3120:
case 1640:
case 1017:
case 969:
case 1011:
case 1698:
case 3970:
case 2944:
case 3820:
case 3331:
case 2783:
case 445:
case 2613:
case 942:
case 775:
case 1030:
case 154:
case 3547:
case 2019:
case 183:
case 1418:
case 941:
case 2623:
case 3968:
case 744:
case 2900:
case 543:
case 3831:
case 474:
case 2410:
case 1988:
case 1908:
case 1439:
case 3893:
case 828:
case 2834:
case 436:
case 1210:
case 706:
case 4060:
case 2134:
case 3722:
case 3193:
case 3875:
case 3925:
case 49:
case 2265:
case 2073:
case 2420:
case 3396:
case 2038:
case 2679:
case 272:
case 416:
case 3570:
case 2648:
case 1677:
case 2885:
case 428:
case 4036:
case 194:
case 2:
case 3255:
case 3599:
case 2690:
case 1671:
case 4033:
case 2246:
case 89:
case 92:
case 323:
case 2672:
case 3086:
case 3719:
case 3568:
case 2305:
case 1446:
case 3003:
case 2385:
case 816:
case 611:
case 3702:
case 1178:
case 3905:
case 2779:
case 3499:
case 2147:
case 917:
case 1136:
case 3612:
case 987:
case 1836:
case 2847:
case 2141:
case 1928:
case 261:
case 937:
case 1546:
case 278:
case 1052:
case 609:
case 2347:
case 270:
case 2537:
case 1918:
case 1333:
case 2531:
case 991:
case 821:
case 626:
case 794:
case 3013:
case 610:
case 3934:
case 2315:
case 1860:
case 2458:
case 422:
case 2825:
case 895:
case 3492:
case 688:
case 2996:
case 3619:
case 1349:
case 1539:
case 3789:
case 2115:
case 1849:
case 3061:
case 129:
case 1777:
case 2748:
case 1244:
case 1656:
case 2520:
case 3026:
case 2815:
case 421:
case 144:
case 2294:
case 3233:
case 979:
case 1932:
case 1735:
case 514:
case 864:
case 3447:
case 1007:
case 952:
case 2064:
case 2899:
case 455:
case 224:
case 3441:
case 584:
case 647:
case 534:
case 1450:
case 2868:
case 3673:
case 1769:
case 3695:
case 84:
case 2931:
case 3079:
case 1518:
case 3757:
case 3638:
case 1943:
case 175:
case 16:
case 2250:
case 2767:
case 2288:
case 3425:
case 1614:
case 2208:
case 3344:
case 3534:
case 1784:
case 855:
case 1939:
case 2761:
case 3090:
case 2009:
case 1897:
case 1624:
case 1191:
case 3054:
case 2170:
case 77:
case 389:
case 2089:
case 2713:
case 319:
case 44:
case 1891:
case 2870:
case 2920:
case 3844:
case 3879:
case 1381:
case 1794:
case 3741:
case 1440:
case 2583:
case 1956:
case 2503:
case 677:
case 2235:
case 535:
case 2298:
case 2882:
case 2182:
case 2240:
case 2364:
case 174:
case 1524:
case 338:
case 3747:
case 1387:
case 2506:
case 1953:
case 3000:
case 2068:
case 865:
case 2675:
case 504:
case 87:
case 1101:
case 515:
case 4045:
case 1181:
case 1887:
case 380:
case 1881:
case 1801:
case 225:
case 3451:
case 2382:
case 454:
case 2164:
case 3348:
case 1618:
case 1267:
case 3538:
case 3259:
case 3595:
case 978:
case 2070:
case 3044:
case 2423:
case 961:
case 1091:
case 1708:
case 1226:
case 2461:
case 764:
case 2809:
case 291:
case 1261:
case 309:
case 3390:
case 217:
case 4066:
case 2262:
case 1216:
case 47:
case 465:
case 2389:
case 4027:
case 2092:
case 3190:
case 4021:
case 2416:
case 854:
case 833:
case 287:
case 292:
case 3715:
case 3912:
case 3685:
case 2357:
case 2983:
case 3529:
case 2903:
case 795:
case 1874:
case 3402:
case 689:
case 2351:
case 3482:
case 2906:
case 907:
case 1036:
case 1374:
case 2047:
case 3519:
case 1639:
case 2700:
case 2851:
case 3768:
case 1078:
case 3287:
case 639:
case 3464:
case 248:
case 1033:
case 3123:
case 2454:
case 3792:
case 3409:
case 3313:
case 1643:
case 1859:
case 2472:
case 3489:
case 19:
case 3826:
case 1272:
case 722:
case 251:
case 3522:
case 1646:
case 2758:
case 546:
case 3861:
case 1049:
case 3823:
case 3973:
case 2448:
case 1477:
case 2271:
case 1290:
case 3361:
case 1248:
case 3367:
case 2744:
case 3770:
case 3326:
case 1632:
case 252:
case 1060:
case 3116:
case 924:
case 1106:
case 1502:
case 3732:
case 1582:
case 3935:
case 1670:
case 1803:
case 1429:
case 2952:
case 1806:
case 598:
case 2507:
case 2587:
case 2028:
case 2219:
case 2445:
case 3969:
case 1957:
case 1383:
case 3743:
case 395:
case 67:
case 1419:
case 2501:
case 665:
case 3904:
case 4023:
case 2959:
case 1422:
case 2417:
case 613:
case 28:
case 296:
case 3984:
case 52:
case 21:
case 683:
case 2222:
case 2411:
case 321:
case 966:
case 1509:
case 3739:
case 4067:
case 1217:
case 1668:
case 3962:
case 3765:
case 633:
case 1221:
case 1096:
case 4013:
case 3571:
case 1263:
case 1227:
case 157:
case 322:
case 2421:
case 2212:
case 1093:
case 3283:
case 1902:
case 1705:
case 1031:
case 889:
case 780:
case 788:
case 3345:
case 1982:
case 1615:
case 2552:
case 2046:
case 1037:
case 819:
case 710:
case 569:
case 2907:
case 1964:
case 558:
case 3055:
case 1551:
case 550:
case 2987:
case 2353:
case 3688:
case 1557:
case 2981:
case 3569:
case 2660:
case 2032:
case 3130:
case 2356:
case 408:
case 738:
case 3117:
case 2295:
case 489:
case 3504:
case 541:
case 4054:
case 1473:
case 3584:
case 1020:
case 3650:
case 1909:
case 1438:
case 2065:
case 1495:
case 3363:
case 3111:
case 2273:
case 3166:
case 2636:
case 364:
case 3971:
case 4048:
case 2039:
case 542:
case 1647:
case 3317:
case 2678:
case 3863:
case 3127:
case 3311:
case 1641:
case 3163:
case 3694:
case 3827:
case 439:
case 4090:
case 808:
case 197:
case 182:
case 2343:
case 3594:
case 3045:
case 2832:
case 2285:
case 2346:
case 333:
case 354:
case 3030:
case 3855:
case 5:
case 1405:
case 2578:
case 410:
case 1547:
case 3355:
case 3418:
case 98:
case 2143:
case 1837:
case 2053:
case 1131:
case 1831:
case 430:
case 1137:
case 4080:
case 3550:
case 313:
case 708:
case 2332:
case 3684:
case 266:
case 2542:
case 1992:
case 1738:
case 4058:
case 789:
case 1657:
case 2234:
case 3508:
case 3066:
case 102:
case 695:
case 973:
case 1320:
case 3275:
case 568:
case 1525:
case 2365:
case 719:
case 3021:
case 1434:
case 1651:
case 3063:
case 2997:
case 426:
case 1120:
case 2652:
case 2339:
case 409:
case 572:
case 838:
case 3677:
case 1729:
case 1941:
case 2128:
case 394:
case 2936:
case 1255:
case 1599:
case 3671:
case 3432:
case 1609:
case 123:
case 2328:
case 3237:
case 1568:
case 1006:
case 1689:
case 3446:
case 2818:
case 3231:
case 2745:
case 3950:
case 1003:
case 1196:
case 1592:
case 447:
case 2681:
case 655:
case 1893:
case 3908:
case 1175:
case 1664:
case 777:
case 2687:
case 1375:
case 1396:
case 599:
case 2763:
case 3465:
case 1393:
case 1915:
case 2591:
case 1682:
case 20:
case 1712:
case 2888:
case 2292:
case 1013:
case 4075:
case 3860:
case 2645:
case 457:
case 1492:
case 3160:
case 4093:
case 2188:
case 3349:
case 1619:
case 1789:
case 3539:
case 645:
case 3565:
case 1297:
case 674:
case 1470:
case 3771:
case 1061:
case 3059:
case 3149:
case 2388:
case 1067:
case 1026:
case 306:
case 177:
case 3244:
case 2308:
case 1291:
case 3833:
case 3178:
case 2069:
case 1702:
case 1905:
case 723:
case 1612:
case 3342:
case 3532:
case 524:
case 284:
case 3836:
case 2299:
case 2555:
case 3928:
case 3878:
case 2663:
case 767:
case 3280:
case 3052:
case 3142:
case 234:
case 3336:
case 2707:
case 2268:
case 2617:
case 2787:
case 2781:
case 2611:
case 2850:
case 2098:
case 2701:
case 2035:
case 2759:
case 1425:
case 2077:
case 3614:
case 276:
case 412:
case 3391:
case 3784:
case 431:
case 701:
case 1260:
case 3488:
case 985:
case 482:
case 1090:
case 1858:
case 1054:
case 432:
case 4020:
case 3762:
case 1072:
case 3965:
case 1358:
case 1249:
case 1415:
case 2215:
case 3197:
case 3081:
case 1233:
case 831:
case 3798:
case 636:
case 1585:
case 3001:
case 2478:
case 927:
case 1236:
case 882:
case 2752:
case 2955:
case 1441:
case 1380:
case 2774:
case 100:
case 1300:
case 1278:
case 616:
case 3946:
case 811:
case 1880:
case 561:
case 832:
case 1673:
case 1800:
case 1100:
case 3943:
case 36:
case 963:
case 375:
case 686:
case 1242:
case 881:
case 1180:
case 1259:
case 3618:
case 1538:
case 401:
case 35:
case 2760:
case 1154:
case 551:
case 1872:
case 1922:
case 1725:
case 109:
case 2371:
case 3223:
case 3484:
case 732:
case 402:
case 905:
case 579:
case 2963:
case 1058:
case 1148:
case 2921:
case 2871:
case 1190:
case 3462:
case 1848:
case 1715:
case 2966:
case 984:
case 781:
case 2733:
case 3440:
case 2474:
case 2452:
case 1879:
case 3301:
case 801:
case 606:
case 2736:
case 1252:
case 3307:
case 3524:
case 1274:
case 3435:
case 2778:
case 3953:
case 3101:
case 802:
case 1457:
case 2930:
case 345:
case 2251:
case 3181:
case 2257:
case 3187:
case 3750:
case 540:
case 3801:
case 2945:
case 1867:
case 2884:
case 1976:
case 823:
case 39:
case 993:
case 1826:
case 66:
case 1489:
case 2362:
case 263:
case 3646:
case 1316:
case 2209:
case 2184:
case 3272:
case 2289:
case 1167:
case 2104:
case 1861:
case 2517:
case 3159:
case 867:
case 1113:
case 1361:
case 2563:
case 3290:
case 1367:
case 3248:
case 644:
case 3359:
case 1813:
case 2088:
case 1116:
case 592:
case 2008:
case 1326:
case 1770:
case 2566:
case 2384:
case 2791:
case 3060:
case 1529:
case 4006:
case 2140:
case 4086:
case 2282:
case 3042:
case 2135:
case 3665:
case 1799:
case 2198:
case 3036:
case 2530:
case 976:
case 215:
case 467:
case 1207:
case 2264:
case 3078:
case 1287:
case 1519:
case 3639:
case 3033:
case 2869:
case 1666:
case 105:
case 692:
case 1350:
case 2499:
case 3841:
case 1069:
case 2702:
case 544:
case 2905:
case 1663:
case 1194:
case 743:
case 3847:
case 83:
case 1555:
case 1299:
case 3347:
case 4018:
case 3537:
case 88:
case 1707:
case 361:
case 2764:
case 153:
case 378:
case 1040:
case 1098:
case 1850:
case 56:
case 637:
case 3400:
case 575:
case 1035:
case 81:
case 1701:
case 3531:
case 3341:
case 3993:
case 873:
case 1808:
case 1645:
case 988:
case 1292:
case 1888:
case 2789:
case 918:
case 70:
case 1062:
case 2709:
case 3975:
case 3772:
case 2016:
case 2470:
case 1491:
case 2023:
case 2061:
case 3790:
case 3325:
case 496:
case 3115:
case 2026:
case 3815:
case 1084:
case 1308:
case 1270:
case 3748:
case 1004:
case 2067:
case 930:
case 3199:
case 2585:
case 1436:
case 200:
case 2278:
case 679:
case 2236:
case 4032:
case 766:
case 2380:
case 1433:
case 3899:
case 1774:
case 1442:
case 2800:
case 193:
case 2880:
case 856:
case 3082:
case 2100:
case 2638:
case 3168:
case 2079:
case 3208:
case 176:
case 2344:
case 1759:
case 2425:
case 2158:
case 648:
case 1077:
case 3723:
case 1460:
case 3596:
case 2858:
case 2090:
case 3910:
case 3575:
case 3089:
case 456:
case 3170:
case 3716:
case 2072:
case 1449:
case 3920:
case 2844:
case 3713:
case 219:
case 3298:
case 3882:
case 3235:
case 1474:
case 1733:
case 2929:
case 1452:
case 3802:
case 3068:
case 1778:
case 3102:
case 2747:
case 4056:
case 3586:
case 2080:
case 3182:
case 2274:
case 466:
case 280:
case 3696:
case 1251:
case 2919:
case 3099:
case 2457:
case 1930:
case 218:
case 3693:
case 3164:
case 1742:
case 2634:
case 1257:
case 2379:
case 3269:
case 210:
case 226:
case 2172:
case 3461:
case 3284:
case 3070:
case 2154:
case 3423:
case 1760:
case 337:
case 2538:
case 3889:
case 1371:
case 209:
case 2573:
case 866:
case 678:
case 661:
case 2854:
case 1459:
case 2922:
case 2872:
case 1177:
case 1963:
case 2890:
case 1749:
case 1921:
case 3389:
case 2372:
case 317:
case 3262:
case 756:
case 387:
case 2715:
case 2685:
case 536:
case 2190:
case 1171:
case 2848:
case 3092:
case 1877:
case 4024:
case 1140:
case 135:
case 1282:
case 3903:
case 1050:
case 3620:
case 2529:
case 3983:
case 3479:
case 3986:
case 545:
case 1401:
case 3780:
case 104:
case 1264:
case 2207:
case 4014:
case 1545:
case 1335:
case 1398:
case 607:
case 2201:
case 2464:
case 2281:
case 1407:
case 348:
case 3857:
case 1094:
case 3041:
case 1884:
case 3015:
case 2161:
case 3472:
case 3454:
case 2792:
case 3631:
case 2867:
case 2995:
case 2167:
case 2861:
case 3637:
case 2316:
case 163:
case 2126:
case 40:
case 1521:
case 379:
case 1563:
case 78:
case 1797:
case 3448:
case 1008:
case 71:
case 908:
case 2770:
case 352:
case 1566:
case 1791:
case 1384:
case 1304:
case 900:
case 3876:
case 3838:
case 3600:
case 3195:
case 4004:
case 2217:
case 3923:
case 1411:
case 3176:
case 3554:
case 727:
case 1466:
case 2412:
case 2096:
case 2263:
case 2075:
case 3916:
case 564:
case 3034:
case 257:
case 13:
case 1463:
case 884:
case 2266:
case 4062:
case 2093:
case 3338:
case 3256:
case 2582:
case 901:
case 2670:
case 3644:
case 1314:
case 434:
case 453:
case 715:
case 1229:
case 1018:
case 3579:
case 2502:
case 3253:
case 369:
case 2806:
case 2183:
case 2886:
case 2103:
case 1697:
case 1824:
case 785:
case 1952:
case 1755:
case 3737:
case 350:
case 3658:
case 1445:
case 2951:
case 1114:
case 1324:
case 405:
case 358:
case 902:
case 1507:
case 2386:
case 2564:
case 2419:
case 3731:
case 1581:
case 3005:
case 2383:
case 2734:
case 232:
case 2473:
case 3312:
case 1642:
case 3526:
case 211:
case 893:
case 923:
case 3122:
case 3567:
case 2476:
case 3796:
case 3561:
case 2989:
case 2438:
case 3775:
case 2909:
case 3972:
case 3954:
case 1039:
case 2647:
case 3990:
case 1678:
case 476:
case 6:
case 212:
case 2010:
case 231:
case 3812:
case 282:
case 746:
case 3948:
case 3513:
case 2785:
case 2982:
case 2902:
case 2705:
case 1153:
case 1649:
case 3319:
case 3129:
case 3224:
case 1552:
case 1046:
case 1574:
case 1156:
case 660:
case 3819:
case 1353:
case 2964:
case 398:
case 671:
case 668:
case 2557:
case 1234:
case 3496:
case 2110:
case 2776:
case 2992:
case 3475:
case 2738:
case 2657:
case 1139:
case 1839:
case 2773:
case 2525:
case 2810:
case 669:
case 1339:
case 399:
case 1674:
case 1997:
case 776:
case 1652:
case 1991:
case 1165:
case 1832:
case 1285:
case 793:
case 3703:
case 1343:
case 3613:
case 1205:
case 1578:
case 3706:
case 2547:
case 1346:
case 2999:
case 3786:
case 957:
case 1536:
case 1132:
case 2405:
case 2837:
case 3900:
case 2131:
case 3980:
case 1846:
case 1056:
case 1146:
case 1332:
case 641:
case 2831:
case 1659:
case 2137:
case 1601:
case 3834:
case 2893:
case 1681:
case 2592:
case 690:
case 1687:
case 3558:
case 4008:
case 2722:
case 2875:
case 1607:
case 2664:
case 698:
case 2396:
case 359:
case 3420:
case 1763:
case 1597:
case 835:
case 2393:
case 372:
case 2682:
case 1766:
case 2570:
case 3544:
case 2602:
case 3095:
case 734:
case 3232:
case 415:
case 753:
case 931:
case 1014:
case 3805:
case 1455:
case 2941:
case 1318:
case 1933:
case 3690:
case 2947:
case 4094:
case 1978:
case 533:
case 3185:
case 982:
case 1936:
case 827:
case 485:
case 2255:
case 1328:
case 2689:
case 2719:
case 1024:
case 435:
case 3672:
case 2086:
case 932:
case 4050:
case 714:
case 3580:
case 3246:
case 583:
case 3654:
case 1942:
case 513:
case 3437:
case 2003:
case 3243:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1755468001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,];
var gg_b = "1755468001/";

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
