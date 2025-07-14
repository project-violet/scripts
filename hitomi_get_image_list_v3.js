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
case 2113:
case 2561:
case 3977:
case 1590:
case 2508:
case 1716:
case 1893:
case 1956:
case 3731:
case 2989:
case 2001:
case 2842:
case 3424:
case 648:
case 3294:
case 2793:
case 900:
case 2494:
case 2682:
case 308:
case 1134:
case 2932:
case 878:
case 3236:
case 536:
case 2650:
case 2436:
case 3386:
case 1480:
case 1773:
case 1474:
case 659:
case 2570:
case 587:
case 1055:
case 2275:
case 881:
case 2458:
case 2331:
case 3481:
case 2323:
case 1688:
case 320:
case 3393:
case 3258:
case 1967:
case 449:
case 1919:
case 952:
case 3591:
case 1646:
case 1612:
case 1886:
case 2521:
case 553:
case 843:
case 3763:
case 1295:
case 2028:
case 1604:
case 1425:
case 1730:
case 2264:
case 817:
case 2786:
case 3578:
case 2014:
case 4092:
case 3610:
case 2555:
case 984:
case 2681:
case 1451:
case 2897:
case 3658:
case 3071:
case 3732:
case 2675:
case 146:
case 3827:
case 746:
case 993:
case 1877:
case 1021:
case 3153:
case 2664:
case 1033:
case 1169:
case 2923:
case 3060:
case 3500:
case 3803:
case 3144:
case 1246:
case 2282:
case 1061:
case 347:
case 313:
case 3020:
case 596:
case 607:
case 227:
case 3205:
case 401:
case 1129:
case 3694:
case 3838:
case 1501:
case 3948:
case 1611:
case 3377:
case 2522:
case 4078:
case 2187:
case 1070:
case 1084:
case 1537:
case 2239:
case 3179:
case 3439:
case 142:
case 729:
case 3450:
case 1356:
case 3636:
case 2389:
case 742:
case 3026:
case 4044:
case 635:
case 137:
case 3980:
case 186:
case 786:
case 3427:
case 2441:
case 944:
case 89:
case 3241:
case 2227:
case 3579:
case 834:
case 1137:
case 1477:
case 3746:
case 3630:
case 2122:
case 2203:
case 1350:
case 3456:
case 3659:
case 1339:
case 1289:
case 3952:
case 3403:
case 2256:
case 3419:
case 3882:
case 4079:
case 204:
case 2805:
case 624:
case 2219:
case 3178:
case 3925:
case 2238:
case 336:
case 1631:
case 2155:
case 2995:
case 3351:
case 3438:
case 2388:
case 1705:
case 3066:
case 272:
case 3673:
case 825:
case 3100:
case 1981:
case 3818:
case 379:
case 3839:
case 1607:
case 182:
case 403:
case 2267:
case 3506:
case 1231:
case 2904:
case 1375:
case 1102:
case 1794:
case 154:
case 1381:
case 2765:
case 664:
case 1852:
case 3535:
case 20:
case 1114:
case 3216:
case 2442:
case 2912:
case 1583:
case 2836:
case 2667:
case 1880:
case 857:
case 1640:
case 2069:
case 2473:
case 1736:
case 547:
case 513:
case 3325:
case 1364:
case 1710:
case 1918:
case 3641:
case 2045:
case 1596:
case 3697:
case 94:
case 841:
case 3881:
case 3352:
case 299:
case 1632:
case 2513:
case 551:
case 3099:
case 1939:
case 2161:
case 3365:
case 392:
case 3374:
case 1263:
case 2430:
case 695:
case 2656:
case 797:
case 3795:
case 2184:
case 3230:
case 2725:
case 1982:
case 1087:
case 1534:
case 931:
case 3115:
case 883:
case 671:
case 4035:
case 2749:
case 477:
case 1825:
case 2997:
case 3211:
case 9:
case 84:
case 2411:
case 2359:
case 3773:
case 1386:
case 3022:
case 369:
case 1236:
case 2274:
case 3134:
case 2280:
case 2265:
case 108:
case 708:
case 1723:
case 1294:
case 1605:
case 1424:
case 3465:
case 1072:
case 3196:
case 3956:
case 3590:
case 1977:
case 93:
case 2520:
case 2823:
case 3759:
case 2000:
case 3730:
case 2225:
case 1098:
case 3425:
case 1464:
case 1547:
case 2863:
case 3646:
case 1591:
case 4090:
case 586:
case 2560:
case 2316:
case 2585:
case 2571:
case 3967:
case 3514:
case 1258:
case 2078:
case 3062:
case 812:
case 120:
case 1481:
case 720:
case 2412:
case 3528:
case 2889:
case 1803:
case 2916:
case 2446:
case 661:
case 1060:
case 2091:
case 2756:
case 1106:
case 2047:
case 3033:
case 751:
case 1993:
case 1153:
case 2404:
case 909:
case 455:
case 160:
case 3117:
case 760:
case 1827:
case 4037:
case 2251:
case 346:
case 3338:
case 606:
case 3319:
case 1610:
case 650:
case 3741:
case 1578:
case 329:
case 2674:
case 1439:
case 2680:
case 1179:
case 554:
case 875:
case 3084:
case 2543:
case 3070:
case 3303:
case 440:
case 2554:
case 891:
case 1592:
case 3611:
case 2015:
case 2572:
case 674:
case 3501:
case 2397:
case 4028:
case 1694:
case 1819:
case 1020:
case 2652:
case 113:
case 3061:
case 2930:
case 147:
case 747:
case 2959:
case 1403:
case 40:
case 2994:
case 2154:
case 3924:
case 2812:
case 3350:
case 732:
case 1965:
case 1746:
case 3318:
case 2804:
case 3477:
case 3137:
case 2143:
case 514:
case 1712:
case 753:
case 153:
case 3013:
case 3851:
case 1241:
case 2888:
case 4069:
case 2648:
case 1427:
case 3101:
case 1980:
case 1974:
case 663:
case 337:
case 2432:
case 1026:
case 3382:
case 218:
case 1506:
case 3569:
case 2910:
case 1467:
case 415:
case 499:
case 382:
case 4029:
case 711:
case 3607:
case 1839:
case 868:
case 3128:
case 179:
case 2739:
case 3009:
case 1066:
case 2958:
case 3705:
case 610:
case 3623:
case 1351:
case 277:
case 35:
case 136:
case 736:
case 893:
case 685:
case 3517:
case 1882:
case 1616:
case 3364:
case 2811:
case 833:
case 505:
case 1325:
case 828:
case 2160:
case 2006:
case 981:
case 88:
case 3640:
case 3207:
case 1711:
case 3874:
case 476:
case 2044:
case 4034:
case 1216:
case 3114:
case 3865:
case 439:
case 2310:
case 1242:
case 2431:
case 917:
case 542:
case 3381:
case 2185:
case 2724:
case 3102:
case 3223:
case 943:
case 1864:
case 3087:
case 3534:
case 2764:
case 3982:
case 800:
case 1795:
case 3689:
case 2905:
case 1380:
case 3263:
case 3950:
case 3190:
case 192:
case 3758:
case 792:
case 2781:
case 1099:
case 203:
case 1352:
case 2120:
case 2526:
case 472:
case 1875:
case 1530:
case 3111:
case 3563:
case 3860:
case 2733:
case 198:
case 798:
case 2721:
case 1476:
case 3003:
case 632:
case 1972:
case 826:
case 2180:
case 3234:
case 2165:
case 2226:
case 3308:
case 2699:
case 2548:
case 1194:
case 1702:
case 763:
case 335:
case 1320:
case 3296:
case 2097:
case 3871:
case 2802:
case 3645:
case 2347:
case 3507:
case 548:
case 1653:
case 2125:
case 939:
case 2266:
case 2978:
case 2784:
case 2483:
case 1360:
case 1409:
case 1606:
case 1870:
case 611:
case 443:
case 3067:
case 2593:
case 291:
case 1808:
case 559:
case 36:
case 785:
case 3820:
case 3531:
case 687:
case 185:
case 481:
case 324:
case 3523:
case 3038:
case 1385:
case 110:
case 822:
case 3617:
case 710:
case 849:
case 1235:
case 976:
case 3854:
case 3146:
case 1737:
case 4032:
case 231:
case 3104:
case 1971:
case 1206:
case 3269:
case 1985:
case 2073:
case 2469:
case 2837:
case 507:
case 696:
case 3217:
case 1960:
case 2991:
case 2151:
case 3921:
case 2378:
case 216:
case 2947:
case 3933:
case 2417:
case 1093:
case 364:
case 2042:
case 2016:
case 32:
case 395:
case 866:
case 1354:
case 3908:
case 2059:
case 1086:
case 3961:
case 2030:
case 2577:
case 2828:
case 2657:
case 371:
case 3532:
case 801:
case 90:
case 3245:
case 2915:
case 1862:
case 1541:
case 1105:
case 4040:
case 123:
case 3984:
case 3970:
case 1597:
case 138:
case 738:
case 1422:
case 1292:
case 2036:
case 3706:
case 1769:
case 1074:
case 2254:
case 434:
case 359:
case 3237:
case 252:
case 524:
case 1615:
case 4088:
case 1957:
case 4004:
case 1717:
case 4012:
case 3201:
case 2094:
case 233:
case 3268:
case 3976:
case 2620:
case 1052:
case 28:
case 3024:
case 608:
case 3504:
case 2344:
case 121:
case 3140:
case 3228:
case 2935:
case 3498:
case 1887:
case 3546:
case 3779:
case 2428:
case 1025:
case 1729:
case 200:
case 3602:
case 1455:
case 967:
case 1278:
case 1966:
case 2058:
case 2551:
case 3588:
case 1745:
case 3899:
case 409:
case 1173:
case 1600:
case 3857:
case 2549:
case 3460:
case 1366:
case 818:
case 3628:
case 2260:
case 1433:
case 2525:
case 3107:
case 761:
case 2834:
case 3595:
case 1116:
case 3214:
case 3826:
case 2896:
case 2944:
case 150:
case 750:
case 1142:
case 571:
case 519:
case 3471:
case 1678:
case 706:
case 927:
case 2285:
case 660:
case 3202:
case 3123:
case 1051:
case 3637:
case 2643:
case 3866:
case 1357:
case 564:
case 3018:
case 588:
case 2883:
case 877:
case 3511:
case 1999:
case 3050:
case 1130:
case 483:
case 3376:
case 3290:
case 890:
case 647:
case 1326:
case 494:
case 3082:
case 284:
case 2005:
case 1408:
case 3668:
case 613:
case 2672:
case 307:
case 2220:
case 3735:
case 2148:
case 2565:
case 2552:
case 3313:
case 774:
case 3987:
case 174:
case 4073:
case 1027:
case 1871:
case 3943:
case 3714:
case 2937:
case 686:
case 1885:
case 735:
case 363:
case 3320:
case 1629:
case 431:
case 3954:
case 3702:
case 1922:
case 2390:
case 1361:
case 1234:
case 2968:
case 2276:
case 1791:
case 3136:
case 3972:
case 2089:
case 3476:
case 1384:
case 990:
case 3679:
case 416:
case 1457:
case 2687:
case 2847:
case 3833:
case 1111:
case 2720:
case 3235:
case 3542:
case 310:
case 3385:
case 3998:
case 3158:
case 4059:
case 1019:
case 385:
case 4030:
case 3861:
case 76:
case 16:
case 3808:
case 57:
case 1067:
case 3644:
case 3573:
case 3884:
case 3870:
case 682:
case 1669:
case 1283:
case 3360:
case 3409:
case 1962:
case 1321:
case 827:
case 1507:
case 3653:
case 2164:
case 1333:
case 72:
case 12:
case 2538:
case 188:
case 1872:
case 278:
case 3768:
case 1355:
case 3635:
case 2772:
case 3960:
case 2519:
case 1217:
case 3701:
case 2023:
case 1843:
case 4041:
case 3253:
case 867:
case 3206:
case 2902:
case 2754:
case 3971:
case 2328:
case 1683:
case 1792:
case 2567:
case 574:
case 2007:
case 2914:
case 1854:
case 1146:
case 930:
case 2182:
case 243:
case 3597:
case 1984:
case 1778:
case 2368:
case 217:
case 2301:
case 1499:
case 670:
case 3541:
case 3862:
case 561:
case 2613:
case 3855:
case 771:
case 2800:
case 3487:
case 1898:
case 475:
case 2503:
case 2118:
case 2150:
case 2798:
case 1961:
case 3086:
case 1700:
case 2139:
case 281:
case 1908:
case 491:
case 1634:
case 444:
case 840:
case 2676:
case 3920:
case 1024:
case 2661:
case 3065:
case 1132:
case 1976:
case 148:
case 748:
case 3957:
case 2345:
case 3141:
case 2011:
case 2539:
case 3615:
case 2550:
case 585:
case 1237:
case 1744:
case 2806:
case 901:
case 2492:
case 2684:
case 2103:
case 2222:
case 2670:
case 1454:
case 510:
case 3074:
case 1706:
case 3769:
case 1189:
case 669:
case 3422:
case 2844:
case 23:
case 1614:
case 614:
case 283:
case 2119:
case 1909:
case 3455:
case 2983:
case 3462:
case 1602:
case 3729:
case 3025:
case 2621:
case 2633:
case 899:
case 1064:
case 1546:
case 3887:
case 2400:
case 1498:
case 2095:
case 1228:
case 962:
case 3691:
case 4005:
case 321:
case 880:
case 2:
case 241:
case 452:
case 1131:
case 646:
case 1202:
case 1123:
case 2088:
case 3510:
case 2726:
case 306:
case 1471:
case 234:
case 350:
case 4036:
case 61:
case 3558:
case 1214:
case 1826:
case 3876:
case 48:
case 2046:
case 1107:
case 361:
case 29:
case 433:
case 3433:
case 876:
case 538:
case 3734:
case 2917:
case 949:
case 3421:
case 2004:
case 2383:
case 922:
case 3366:
case 1309:
case 1857:
case 3247:
case 3600:
case 1313:
case 2835:
case 2524:
case 107:
case 225:
case 3461:
case 707:
case 872:
case 345:
case 1420:
case 2261:
case 1163:
case 2334:
case 3692:
case 456:
case 3470:
case 1376:
case 2284:
case 2270:
case 302:
case 4010:
case 3159:
case 1039:
case 4058:
case 2415:
case 2945:
case 1637:
case 316:
case 593:
case 2921:
case 869:
case 778:
case 2217:
case 3991:
case 3151:
case 1519:
case 1031:
case 60:
case 2872:
case 3868:
case 264:
case 1743:
case 1914:
case 1444:
case 2112:
case 331:
case 2854:
case 1406:
case 2540:
case 1609:
case 2792:
case 2104:
case 568:
case 1902:
case 3445:
case 1878:
case 2532:
case 680:
case 2245:
case 143:
case 3626:
case 2778:
case 3299:
case 1182:
case 1301:
case 3755:
case 1368:
case 117:
case 1527:
case 699:
case 2700:
case 181:
case 2322:
case 1150:
case 485:
case 312:
case 1798:
case 996:
case 295:
case 2898:
case 814:
case 3657:
case 271:
case 410:
case 1800:
case 2589:
case 3828:
case 1771:
case 235:
case 2426:
case 3992:
case 2922:
case 676:
case 1390:
case 3226:
case 3814:
case 3165:
case 1124:
case 1785:
case 3548:
case 3699:
case 3041:
case 3097:
case 1687:
case 1847:
case 3315:
case 1276:
case 2791:
case 639:
case 1089:
case 3434:
case 3733:
case 2003:
case 2370:
case 3721:
case 2384:
case 552:
case 2019:
case 2523:
case 4086:
case 3593:
case 344:
case 1314:
case 953:
case 1302:
case 1175:
case 1928:
case 375:
case 1720:
case 2038:
case 3761:
case 3900:
case 2195:
case 3391:
case 2283:
case 2669:
case 4048:
case 2507:
case 1815:
case 2333:
case 2962:
case 672:
case 3266:
case 3978:
case 3125:
case 533:
case 423:
case 3149:
case 1040:
case 2715:
case 1575:
case 3896:
case 3713:
case 1581:
case 4080:
case 2214:
case 2202:
case 2123:
case 1088:
case 3906:
case 947:
case 1655:
case 3271:
case 1726:
case 913:
case 3285:
case 3953:
case 3260:
case 47:
case 1004:
case 2628:
case 1233:
case 837:
case 2460:
case 1221:
case 2309:
case 1491:
case 2857:
case 3834:
case 886:
case 2595:
case 4065:
case 79:
case 3525:
case 2107:
case 421:
case 3220:
case 2735:
case 627:
case 725:
case 3490:
case 1261:
case 960:
case 3979:
case 2082:
case 1208:
case 368:
case 4025:
case 2313:
case 1835:
case 531:
case 882:
case 1524:
case 3565:
case 1415:
case 3580:
case 2018:
case 3883:
case 3643:
case 54:
case 2866:
case 109:
case 709:
case 2376:
case 393:
case 3186:
case 2511:
case 2039:
case 3709:
case 1284:
case 1270:
case 2050:
case 1582:
case 757:
case 1127:
case 157:
case 3817:
case 2690:
case 1608:
case 328:
case 3401:
case 3094:
case 248:
case 461:
case 1934:
case 2201:
case 3620:
case 3272:
case 765:
case 333:
case 2132:
case 2976:
case 3379:
case 2753:
case 1684:
case 1222:
case 575:
case 3036:
case 1156:
case 1996:
case 3254:
case 1518:
case 2706:
case 3177:
case 3243:
case 4051:
case 2237:
case 1853:
case 591:
case 1806:
case 544:
case 2913:
case 2909:
case 3058:
case 1799:
case 640:
case 3685:
case 2081:
case 2602:
case 300:
case 3845:
case 1317:
case 1983:
case 2075:
case 2899:
case 13:
case 2614:
case 3551:
case 183:
case 3829:
case 3010:
case 2588:
case 2140:
case 741:
case 3787:
case 7:
case 794:
case 3344:
case 2504:
case 1633:
case 3298:
case 3935:
case 3660:
case 1095:
case 2546:
case 1400:
case 3754:
case 2206:
case 808:
case 3328:
case 2971:
case 997:
case 1837:
case 1666:
case 525:
case 2985:
case 3892:
case 731:
case 3007:
case 3444:
case 3743:
case 3914:
case 2737:
case 1042:
case 1801:
case 14:
case 1868:
case 4003:
case 4056:
case 3772:
case 1151:
case 3023:
case 1417:
case 116:
case 3556:
case 1828:
case 4038:
case 3118:
case 2487:
case 3503:
case 3337:
case 2354:
case 2920:
case 2728:
case 712:
case 820:
case 3990:
case 3150:
case 424:
case 2279:
case 1059:
case 3527:
case 3368:
case 2541:
case 238:
case 3182:
case 1626:
case 343:
case 1762:
case 2597:
case 2855:
case 2862:
case 3878:
case 2048:
case 1915:
case 1721:
case 1733:
case 464:
case 2679:
case 298:
case 1180:
case 488:
case 3760:
case 2136:
case 3276:
case 2559:
case 1257:
case 2077:
case 982:
case 1097:
case 2413:
case 3937:
case 1041:
case 3124:
case 1165:
case 1496:
case 3032:
case 2954:
case 2194:
case 2573:
case 557:
case 2870:
case 1784:
case 565:
case 1347:
case 813:
case 3164:
case 3815:
case 2360:
case 2409:
case 1708:
case 3181:
case 2385:
case 2998:
case 2790:
case 2235:
case 677:
case 775:
case 3928:
case 210:
case 3302:
case 471:
case 1890:
case 419:
case 2861:
case 744:
case 2808:
case 986:
case 3564:
case 1525:
case 3757:
case 39:
case 2876:
case 942:
case 1549:
case 3221:
case 2366:
case 1698:
case 2173:
case 2600:
case 3233:
case 3447:
case 3383:
case 2291:
case 543:
case 3004:
case 1285:
case 1402:
case 459:
case 626:
case 3726:
case 2813:
case 3655:
case 1271:
case 2796:
case 1335:
case 3969:
case 2510:
case 1906:
case 3088:
case 2116:
case 2142:
case 1713:
case 3270:
case 202:
case 3622:
case 3284:
case 3929:
case 836:
case 1654:
case 2470:
case 2783:
case 793:
case 2484:
case 2692:
case 309:
case 887:
case 2357:
case 2536:
case 1883:
case 1574:
case 3945:
case 1580:
case 658:
case 1148:
case 274:
case 811:
case 91:
case 768:
case 1979:
case 168:
case 3208:
case 3261:
case 2326:
case 1672:
case 325:
case 2461:
case 1220:
case 784:
case 1437:
case 3539:
case 2615:
case 1243:
case 152:
case 1177:
case 2080:
case 3518:
case 1254:
case 3996:
case 2422:
case 1036:
case 3222:
case 2926:
case 1620:
case 733:
case 365:
case 2717:
case 1094:
case 728:
case 3608:
case 2399:
case 1468:
case 78:
case 2065:
case 27:
case 914:
case 3400:
case 3369:
case 3095:
case 2691:
case 3621:
case 969:
case 2200:
case 2647:
case 3633:
case 1344:
case 341:
case 3879:
case 407:
case 2745:
case 1829:
case 33:
case 3478:
case 700:
case 4018:
case 1685:
case 666:
case 2278:
case 2966:
case 3923:
case 2106:
case 3931:
case 1756:
case 1625:
case 1404:
case 1703:
case 599:
case 515:
case 863:
case 251:
case 2856:
case 2144:
case 1889:
case 1942:
case 1412:
case 580:
case 3340:
case 1649:
case 2803:
case 1598:
case 3555:
case 1727:
case 3562:
case 3014:
case 2827:
case 898:
case 2732:
case 1251:
case 3675:
case 260:
case 3002:
case 1973:
case 907:
case 726:
case 2658:
case 126:
case 50:
case 3218:
case 1554:
case 2948:
case 2418:
case 3522:
case 2377:
case 4055:
case 1674:
case 3389:
case 2867:
case 2450:
case 149:
case 1543:
case 749:
case 1840:
case 2819:
case 2482:
case 2694:
case 3282:
case 668:
case 1199:
case 3405:
case 247:
case 1341:
case 1719:
case 2838:
case 1397:
case 758:
case 3650:
case 1359:
case 2515:
case 3639:
case 1807:
case 2054:
case 3363:
case 1280:
case 1092:
case 41:
case 3932:
case 3873:
case 504:
case 3570:
case 1997:
case 652:
case 3584:
case 1941:
case 3618:
case 3561:
case 2348:
case 3508:
case 4033:
case 1823:
case 4021:
case 355:
case 3816:
case 68:
case 2072:
case 367:
case 572:
case 3068:
case 2723:
case 2294:
case 3842:
case 2605:
case 2424:
case 3307:
case 701:
case 2547:
case 3859:
case 1249:
case 1863:
case 1166:
case 2098:
case 1495:
case 3264:
case 1373:
case 1000:
case 2763:
case 948:
case 166:
case 2475:
case 3331:
case 3458:
case 429:
case 3410:
case 1316:
case 1585:
case 2210:
case 4070:
case 2711:
case 1566:
case 3509:
case 971:
case 296:
case 527:
case 2325:
case 3121:
case 1811:
case 2147:
case 3473:
case 3780:
case 3774:
case 2951:
case 3395:
case 486:
case 1423:
case 1431:
case 3765:
case 1171:
case 730:
case 3017:
case 4076:
case 3912:
case 2824:
case 2216:
case 3894:
case 3946:
case 1310:
case 2535:
case 64:
case 3603:
case 2230:
case 1764:
case 1079:
case 2259:
case 1463:
case 1905:
case 3656:
case 3311:
case 1526:
case 2697:
case 1248:
case 3045:
case 988:
case 3627:
case 821:
case 2875:
case 3108:
case 2099:
case 292:
case 1775:
case 103:
case 2352:
case 3810:
case 2579:
case 1143:
case 850:
case 2057:
case 3034:
case 1154:
case 806:
case 3256:
case 2403:
case 2192:
case 3122:
case 1489:
case 2965:
case 1812:
case 2659:
case 3751:
case 3096:
case 2788:
case 2974:
case 718:
case 1432:
case 376:
case 2241:
case 1888:
case 253:
case 2427:
case 1648:
case 3911:
case 924:
case 790:
case 190:
case 2544:
case 3083:
case 3304:
case 1750:
case 1198:
case 2100:
case 3267:
case 3346:
case 2553:
case 470:
case 2467:
case 304:
case 3805:
case 287:
case 2419:
case 497:
case 2882:
case 2616:
case 2438:
case 777:
case 1693:
case 1782:
case 3238:
case 236:
case 2178:
case 2451:
case 1897:
case 2338:
case 1681:
case 3488:
case 1002:
case 1841:
case 2288:
case 974:
case 2797:
case 3727:
case 2319:
case 2741:
case 4072:
case 1340:
case 3446:
case 2212:
case 2246:
case 3889:
case 2528:
case 835:
case 1664:
case 3047:
case 2877:
case 3404:
case 2695:
case 3091:
case 3756:
case 1923:
case 950:
case 3397:
case 2327:
case 3572:
case 2568:
case 2145:
case 2061:
case 1282:
case 1963:
case 1332:
case 727:
case 906:
case 625:
case 3652:
case 3840:
case 322:
case 2084:
case 2537:
case 3680:
case 3674:
case 961:
case 3554:
case 1218:
case 1187:
case 1842:
case 2196:
case 1068:
case 2956:
case 2903:
case 1793:
case 590:
case 1224:
case 1816:
case 1682:
case 3520:
case 3831:
case 3823:
case 2742:
case 2716:
case 589:
case 2590:
case 4085:
case 921:
case 82:
case 3411:
case 2927:
case 864:
case 1570:
case 2211:
case 269:
case 3274:
case 2773:
case 2480:
case 3807:
case 1639:
case 2474:
case 1436:
case 3571:
case 683:
case 2502:
case 1940:
case 63:
case 1458:
case 366:
case 2514:
case 895:
case 819:
case 740:
case 2183:
case 2295:
case 2604:
case 518:
case 3000:
case 3373:
case 2759:
case 3495:
case 1109:
case 3225:
case 3863:
case 2646:
case 2919:
case 447:
case 2449:
case 413:
case 301:
case 1307:
case 2886:
case 432:
case 1619:
case 3310:
case 10:
case 70:
case 2102:
case 2223:
case 938:
case 330:
case 254:
case 1017:
case 1752:
case 2231:
case 1904:
case 549:
case 2375:
case 3171:
case 923:
case 3423:
case 678:
case 2381:
case 3293:
case 3185:
case 1988:
case 1069:
case 1473:
case 453:
case 848:
case 3407:
case 2874:
case 2207:
case 2640:
case 3394:
case 3120:
case 115:
case 799:
case 1513:
case 303:
case 643:
case 1108:
case 2939:
case 1627:
case 780:
case 2448:
case 2918:
case 3248:
case 479:
case 3526:
case 2087:
case 436:
case 2825:
case 297:
case 1459:
case 681:
case 2982:
case 3463:
case 3764:
case 1184:
case 1725:
case 2849:
case 1603:
case 3557:
case 286:
case 985:
case 1497:
case 2851:
case 2529:
case 501:
case 776:
case 3432:
case 2382:
case 910:
case 2545:
case 3305:
case 237:
case 2232:
case 2168:
case 1096:
case 3812:
case 3686:
case 3489:
case 1122:
case 2289:
case 1256:
case 2663:
case 3846:
case 2137:
case 2318:
case 1162:
case 25:
case 1238:
case 3782:
case 3693:
case 1388:
case 3035:
case 2631:
case 104:
case 1805:
case 282:
case 2607:
case 1312:
case 3910:
case 2569:
case 1346:
case 3718:
case 492:
case 3739:
case 807:
case 2981:
case 172:
case 1083:
case 2128:
case 998:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1752534002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,];
var gg_b = "1752534002/";

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
