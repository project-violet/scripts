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
case 698:
case 2748:
case 2566:
case 2542:
case 796:
case 1593:
case 250:
case 412:
case 1540:
case 182:
case 113:
case 2670:
case 1586:
case 4021:
case 3635:
case 2498:
case 2767:
case 634:
case 3458:
case 3676:
case 1257:
case 301:
case 833:
case 3788:
case 4079:
case 1436:
case 1236:
case 3244:
case 28:
case 706:
case 2614:
case 1304:
case 978:
case 289:
case 3662:
case 2523:
case 1931:
case 637:
case 1634:
case 3646:
case 2216:
case 945:
case 925:
case 2005:
case 882:
case 2869:
case 1264:
case 1464:
case 3794:
case 3232:
case 3432:
case 2640:
case 160:
case 2851:
case 1642:
case 2725:
case 2693:
case 2572:
case 3891:
case 391:
case 3515:
case 586:
case 1228:
case 2484:
case 2778:
case 2284:
case 1091:
case 1776:
case 2049:
case 881:
case 3723:
case 3321:
case 489:
case 2513:
case 119:
case 2655:
case 2624:
case 2921:
case 1169:
case 3772:
case 3217:
case 504:
case 839:
case 954:
case 1418:
case 1218:
case 518:
case 3578:
case 3003:
case 1577:
case 2647:
case 1735:
case 2979:
case 2438:
case 3089:
case 3220:
case 105:
case 538:
case 819:
case 1483:
case 370:
case 3179:
case 2949:
case 181:
case 411:
case 1991:
case 1694:
case 1753:
case 3548:
case 2677:
case 283:
case 2263:
case 507:
case 1496:
case 3121:
case 2760:
case 2782:
case 2804:
case 1450:
case 594:
case 139:
case 2633:
case 2701:
case 1613:
case 2252:
case 2452:
case 1568:
case 2079:
case 1369:
case 1780:
case 1762:
case 3492:
case 3936:
case 902:
case 552:
case 1944:
case 3185:
case 672:
case 2571:
case 1198:
case 2336:
case 747:
case 727:
case 4056:
case 2404:
case 2204:
case 2375:
case 3057:
case 1910:
case 856:
case 1809:
case 1058:
case 600:
case 2328:
case 3312:
case 3330:
case 970:
case 2863:
case 3975:
case 2085:
case 2145:
case 3581:
case 354:
case 1044:
case 3112:
case 3036:
case 4073:
case 2838:
case 1818:
case 1707:
case 1629:
case 2345:
case 3385:
case 1010:
case 1116:
case 3957:
case 4022:
case 724:
case 156:
case 1965:
case 3028:
case 821:
case 2985:
case 258:
case 2030:
case 1027:
case 4037:
case 1506:
case 1398:
case 2357:
case 3075:
case 1974:
case 1599:
case 429:
case 1671:
case 3356:
case 1875:
case 3983:
case 1619:
case 2702:
case 2251:
case 2451:
case 2884:
case 2396:
case 526:
case 3827:
case 3491:
case 1363:
case 3122:
case 991:
case 3909:
case 2781:
case 2118:
case 755:
case 3996:
case 274:
case 2639:
case 530:
case 1352:
case 1759:
case 1403:
case 2990:
case 2469:
case 3741:
case 822:
case 985:
case 3950:
case 345:
case 22:
case 4030:
case 4012:
case 3844:
case 1126:
case 1836:
case 2037:
case 458:
case 1289:
case 1489:
case 3173:
case 229:
case 249:
case 2350:
case 2973:
case 1152:
case 3083:
case 3143:
case 3771:
case 466:
case 773:
case 3096:
case 3190:
case 551:
case 2150:
case 3009:
case 3858:
case 2922:
case 122:
case 277:
case 1917:
case 3050:
case 423:
case 3337:
case 2196:
case 2090:
case 1092:
case 2043:
case 2318:
case 1608:
case 3322:
case 3607:
case 3729:
case 1845:
case 2519:
case 4085:
case 665:
case 2293:
case 294:
case 1242:
case 2545:
case 1900:
case 703:
case 2684:
case 3253:
case 3453:
case 971:
case 3302:
case 2981:
case 2756:
case 3610:
case 334:
case 3632:
case 1961:
case 2286:
case 3381:
case 120:
case 2839:
case 2129:
case 2440:
case 3246:
case 1434:
case 1234:
case 3462:
case 3480:
case 1399:
case 238:
case 2616:
case 3644:
case 3750:
case 207:
case 136:
case 3941:
case 3585:
case 398:
case 2790:
case 583:
case 1959:
case 1199:
case 2141:
case 691:
case 1000:
case 204:
case 3971:
case 486:
case 820:
case 2002:
case 2698:
case 3476:
case 3276:
case 3658:
case 1423:
case 1223:
case 3665:
case 2371:
case 2470:
case 1720:
case 3435:
case 3102:
case 337:
case 3530:
case 1059:
case 314:
case 3807:
case 2722:
case 1717:
case 2575:
case 1272:
case 3181:
case 1645:
case 3041:
case 4081:
case 2652:
case 1413:
case 2899:
case 3692:
case 188:
case 418:
case 404:
case 3859:
case 1007:
case 2806:
case 286:
case 70:
case 692:
case 2433:
case 1744:
case 709:
case 3861:
case 2319:
case 2477:
case 2712:
case 3728:
case 715:
case 3775:
case 2663:
case 3800:
case 990:
case 1683:
case 2108:
case 1494:
case 3764:
case 1294:
case 497:
case 1732:
case 3908:
case 1907:
case 888:
case 494:
case 2583:
case 735:
case 2308:
case 3745:
case 1563:
case 972:
case 3617:
case 2247:
case 1829:
case 3556:
case 1139:
case 2509:
case 3590:
case 438:
case 2785:
case 3543:
case 1758:
case 2626:
case 2268:
case 3019:
case 2255:
case 2721:
case 3066:
case 3182:
case 1114:
case 2868:
case 300:
case 2824:
case 1888:
case 764:
case 1976:
case 875:
case 1186:
case 1935:
case 153:
case 1429:
case 2372:
case 2779:
case 452:
case 1193:
case 848:
case 251:
case 1370:
case 2166:
case 3972:
case 372:
case 3966:
case 3200:
case 230:
case 1894:
case 1953:
case 1386:
case 3023:
case 549:
case 2749:
case 1076:
case 1170:
case 3461:
case 54:
case 1980:
case 246:
case 1962:
case 226:
case 4025:
case 1035:
case 3934:
case 1314:
case 2604:
case 175:
case 3789:
case 4078:
case 3382:
case 2833:
case 2499:
case 1813:
case 1441:
case 2334:
case 3259:
case 3459:
case 2015:
case 3301:
case 128:
case 2982:
case 148:
case 3154:
case 3207:
case 3549:
case 1408:
case 3013:
case 2194:
case 463:
case 776:
case 1177:
case 3178:
case 2948:
case 558:
case 908:
case 3988:
case 1569:
case 880:
case 3367:
case 2503:
case 1355:
case 1368:
case 1995:
case 159:
case 2967:
case 3913:
case 365:
case 1168:
case 2814:
case 1155:
case 3167:
case 1731:
case 2048:
case 2188:
case 1124:
case 3521:
case 4001:
case 3:
case 2978:
case 371:
case 3354:
case 2439:
case 2840:
case 1147:
case 2886:
case 4060:
case 85:
case 4082:
case 3378:
case 1842:
case 1377:
case 2954:
case 2893:
case 3325:
case 3579:
case 934:
case 1095:
case 2100:
case 3059:
case 2415:
case 2215:
case 2527:
case 898:
case 108:
case 1718:
case 1041:
case 3272:
case 789:
case 3720:
case 2738:
case 206:
case 137:
case 1929:
case 2532:
case 1435:
case 50:
case 95:
case 316:
case 660:
case 1665:
case 3223:
case 3423:
case 1476:
case 3657:
case 3061:
case 731:
case 3199:
case 1971:
case 1674:
case 3106:
case 1941:
case 2999:
case 1644:
case 808:
case 2906:
case 198:
case 2260:
case 2460:
case 814:
case 1462:
case 1480:
case 3399:
case 3234:
case 3434:
case 4039:
case 3306:
case 2752:
case 2359:
case 2401:
case 2201:
case 599:
case 3664:
case 1632:
case 134:
case 2300:
case 340:
case 1783:
case 3466:
case 1796:
case 980:
case 3442:
case 3900:
case 2361:
case 3675:
case 2763:
case 117:
case 2630:
case 1709:
case 1453:
case 1253:
case 1543:
case 2673:
case 681:
case 3765:
case 712:
case 2467:
case 2798:
case 3488:
case 1590:
case 3563:
case 2622:
case 2307:
case 1617:
case 1745:
case 3618:
case 2248:
case 2448:
case 3907:
case 1908:
case 1620:
case 3683:
case 2254:
case 284:
case 3732:
case 3339:
case 2784:
case 3609:
case 2656:
case 2425:
case 2939:
case 2802:
case 948:
case 1736:
case 732:
case 3213:
case 3413:
case 3841:
case 3007:
case 1859:
case 1008:
case 2643:
case 1692:
case 2346:
case 1072:
case 872:
case 3241:
case 2769:
case 328:
case 2611:
case 2914:
case 1459:
case 1259:
case 455:
case 3035:
case 1631:
case 1360:
case 2070:
case 2176:
case 375:
case 3393:
case 1261:
case 3170:
case 656:
case 2878:
case 1023:
case 800:
case 2353:
case 2940:
case 2402:
case 1505:
case 758:
case 2202:
case 2854:
case 1200:
case 3953:
case 2481:
case 2281:
case 3193:
case 766:
case 247:
case 227:
case 2153:
case 3429:
case 3935:
case 3080:
case 3186:
case 1887:
case 4047:
case 100:
case 3504:
case 2146:
case 2040:
case 3976:
case 1923:
case 1101:
case 2531:
case 621:
case 1895:
case 3114:
case 2093:
case 2867:
case 1066:
case 1160:
case 3471:
case 723:
case 920:
case 4014:
case 1994:
case 1853:
case 2649:
case 1691:
case 171:
case 1354:
case 3087:
case 380:
case 2047:
case 1846:
case 3834:
case 3124:
case 3603:
case 4086:
case 1880:
case 936:
case 622:
case 2933:
case 2801:
case 564:
case 2704:
case 1913:
case 3333:
case 777:
case 3731:
case 1167:
case 2860:
case 3155:
case 3168:
case 774:
case 255:
case 2968:
case 916:
case 479:
case 2621:
case 3569:
case 3987:
case 567:
case 1988:
case 2924:
case 3355:
case 3823:
case 2033:
case 1178:
case 362:
case 729:
case 749:
case 1125:
case 1835:
case 3208:
case 424:
case 2591:
case 1207:
case 2679:
case 3872:
case 3551:
case 865:
case 3275:
case 3642:
case 3666:
case 409:
case 801:
case 1653:
case 1515:
case 2212:
case 2430:
case 2412:
case 191:
case 40:
case 1427:
case 1227:
case 1891:
case 1210:
case 1232:
case 1410:
case 718:
case 4069:
case 1794:
case 704:
case 3464:
case 3570:
case 360:
case 3803:
case 797:
case 1680:
case 1311:
case 2601:
case 415:
case 3889:
case 2331:
case 4051:
case 2660:
case 2682:
case 3304:
case 2285:
case 2485:
case 891:
case 1560:
case 3514:
case 1274:
case 1474:
case 2724:
case 1111:
case 640:
case 620:
case 2821:
case 587:
case 435:
case 2768:
case 3457:
case 1676:
case 794:
case 1265:
case 3623:
case 3586:
case 313:
case 3031:
case 2553:
case 1305:
case 738:
case 942:
case 3245:
case 29:
case 395:
case 3555:
case 2595:
case 1292:
case 2243:
case 2443:
case 2811:
case 3746:
case 235:
case 2490:
case 968:
case 1903:
case 1121:
case 2587:
case 2969:
case 102:
case 3250:
case 3547:
case 2256:
case 2456:
case 941:
case 921:
case 3351:
case 1548:
case 2678:
case 3296:
case 1766:
case 3496:
case 2625:
case 2793:
case 2391:
case 2740:
case 1179:
case 170:
case 2654:
case 2786:
case 596:
case 3991:
case 381:
case 305:
case 20:
case 786:
case 1420:
case 1149:
case 2437:
case 2770:
case 802:
case 3418:
case 493:
case 1217:
case 1772:
case 1379:
case 192:
case 3577:
case 2648:
case 1003:
case 1578:
case 3533:
case 3169:
case 1695:
case 2473:
case 1321:
case 3091:
case 2667:
case 870:
case 1028:
case 2873:
case 2084:
case 3599:
case 763:
case 3974:
case 1385:
case 919:
case 3958:
case 356:
case 1957:
case 3116:
case 555:
case 2016:
case 2822:
case 905:
case 2205:
case 1502:
case 3818:
case 675:
case 1708:
case 3629:
case 628:
case 3184:
case 2127:
case 1130:
case 267:
case 1036:
case 1112:
case 2837:
case 4026:
case 1945:
case 154:
case 3074:
case 1975:
case 2310:
case 2739:
case 3927:
case 4052:
case 321:
case 341:
case 2681:
case 1928:
case 3809:
case 3932:
case 981:
case 2098:
case 1719:
case 1312:
case 3384:
case 573:
case 2344:
case 3850:
case 995:
case 2916:
case 751:
case 2165:
case 854:
case 1185:
case 1045:
case 1936:
case 93:
case 2211:
case 2411:
case 368:
case 1607:
case 1729:
case 3608:
case 3092:
case 845:
case 982:
case 3920:
case 1050:
case 3539:
case 1156:
case 322:
case 342:
case 1918:
case 76:
case 878:
case 2063:
case 547:
case 3326:
case 527:
case 1190:
case 1096:
case 1373:
case 2221:
case 680:
case 1771:
case 1865:
case 1858:
case 3857:
case 752:
case 1143:
case 1083:
case 125:
case 3992:
case 3352:
case 2706:
case 524:
case 544:
case 1741:
case 662:
case 2799:
case 3864:
case 4016:
case 1122:
case 2117:
case 1832:
case 1909:
case 1810:
case 65:
case 3619:
case 57:
case 1983:
case 1491:
case 467:
case 1291:
case 3363:
case 659:
case 2830:
case 2026:
case 2249:
case 2449:
case 579:
case 3025:
case 1924:
case 2988:
case 904:
case 1077:
case 2876:
case 3078:
case 3503:
case 3113:
case 1387:
case 3388:
case 4072:
case 155:
case 1955:
case 3967:
case 3589:
case 1679:
case 2207:
case 2154:
case 2407:
case 1591:
case 3705:
case 64:
case 4023:
case 1033:
case 3870:
case 1947:
case 490:
case 3948:
case 2354:
case 2:
case 3394:
case 3886:
case 3840:
case 3439:
case 2088:
case 1024:
case 3925:
case 2378:
case 3651:
case 2994:
case 2325:
case 2579:
case 1649:
case 1704:
case 265:
case 36:
case 369:
case 1860:
case 1882:
case 4066:
case 3814:
case 4042:
case 400:
case 3188:
case 2846:
case 1187:
case 1933:
case 2521:
case 471:
case 1605:
case 666:
case 879:
case 310:
case 3779:
case 3372:
case 4088:
case 3166:
case 3060:
case 3915:
case 147:
case 2972:
case 127:
case 2511:
case 2895:
case 465:
case 3855:
case 844:
case 2182:
case 741:
case 1162:
case 2887:
case 1086:
case 1146:
case 1040:
case 3134:
case 1531:
case 643:
case 623:
case 2789:
case 2360:
case 3833:
case 3123:
case 17:
case 2072:
case 1346:
case 4094:
case 3299:
case 2301:
case 1611:
case 3982:
case 3206:
case 3406:
case 3015:
case 2115:
case 1993:
case 124:
case 578:
case 330:
case 3172:
case 363:
case 3749:
case 2261:
case 2461:
case 2023:
case 1878:
case 3366:
case 1751:
case 1986:
case 1353:
case 545:
case 1135:
case 525:
case 2728:
case 1478:
case 719:
case 2861:
case 1802:
case 1939:
case 1225:
case 3663:
case 2522:
case 437:
case 2800:
case 1254:
case 2919:
case 1454:
case 2537:
case 1881:
case 963:
case 2764:
case 887:
case 1716:
case 946:
case 2692:
case 1643:
case 632:
case 2008:
case 1690:
case 386:
case 591:
case 2736:
case 3433:
case 4029:
case 3424:
case 3550:
case 2287:
case 781:
case 3785:
case 612:
case 2590:
case 2757:
case 2295:
case 1592:
case 2495:
case 1467:
case 1267:
case 884:
case 3268:
case 1798:
case 3455:
case 2019:
case 910:
case 739:
case 2908:
case 4071:
case 417:
case 187:
case 434:
case 2745:
case 1307:
case 1622:
case 3308:
case 3596:
case 1448:
case 795:
case 2556:
case 3447:
case 3509:
case 3743:
case 2262:
case 1565:
case 3557:
case 2029:
case 96:
case 1401:
case 1201:
case 307:
case 1574:
case 3214:
case 713:
case 782:
case 1260:
case 298:
case 2796:
case 2071:
case 1763:
case 1361:
case 3545:
case 502:
case 2709:
case 3756:
case 3684:
case 2253:
case 2632:
case 2381:
case 3440:
case 3902:
case 3839:
case 3286:
case 3270:
case 2235:
case 1532:
case 1510:
case 2435:
case 237:
case 1527:
case 689:
case 2512:
case 2807:
case 2041:
case 2718:
case 1099:
case 397:
case 3575:
case 2181:
case 3081:
case 760:
case 4008:
case 592:
case 1159:
case 2674:
case 3002:
case 631:
case 3371:
case 733:
case 2476:
case 1726:
case 3990:
case 989:
case 1706:
case 98:
case 3022:
case 3816:
case 3469:
case 2390:
case 2173:
case 32:
case 590:
case 3037:
case 3350:
case 762:
case 329:
case 3251:
case 2356:
case 2827:
case 1249:
case 1120:
case 1449:
case 1830:
case 1812:
case 1507:
case 3508:
case 3396:
case 75:
case 1117:
case 2909:
case 2122:
case 3781:
case 1963:
case 2996:
case 377:
case 911:
case 2050:
case 2156:
case 3090:
case 1320:
case 2337:
case 876:
case 1279:
case 66:
case 500:
case 3937:
case 3519:
case 1926:
case 2143:
case 2083:
case 2874:
case 572:
case 3898:
case 1063:
case 1421:
case 2190:
case 2096:
case 2858:
case 3150:
case 2057:
case 4050:
case 343:
case 1098:
case 3328:
case 3097:
case 3364:
case 2600:
case 1332:
case 1310:
case 257:
case 3930:
case 912:
case 3912:
case 2928:
case 2185:
case 3699:
case 3571:
case 2936:
case 3852:
case 2659:
case 1174:
case 4083:
case 1211:
case 1411:
case 5:
case 1890:
case 2197:
case 610:
case 2431:
case 1916:
case 3157:
case 1165:
case 1998:
case 478:
case 2385:
case 761:
case 663:
case 4018:
case 1374:
case 425:
case 3826:
case 1559:
case 3030:
case 3136:
case 1144:
case 1873:
case 630:
case 3985:
case 1358:
case 2075:
case 2581:
case 3175:
case 254:
case 167:
case 2036:
case 1127:
case 1205:
case 2502:
case 2708:
case 1561:
case 3345:
case 1069:
case 2525:
case 292:
case 2417:
case 2217:
case 2772:
case 788:
case 3647:
case 2003:
case 1648:
case 3594:
case 1237:
case 2149:
case 10:
case 2089:
case 89:
case 3189:
case 2321:
case 2695:
case 115:
case 485:
case 3668:
case 1667:
case 1051:
case 3921:
case 514:
case 508:
case 1714:
case 3389:
case 1969:
case 3588:
case 3452:
case 3252:
case 401:
case 3701:
case 2567:
case 1443:
case 2292:
case 966:
case 3079:
case 534:
case 2179:
case 270:
case 923:
case 3677:
case 1256:
case 1678:
case 598:
case 2766:
case 1793:
case 2349:
case 1297:
case 2501:
case 1821:
case 3498:
case 103:
case 3534:
case 1580:
case 2465:
case 893:
case 1285:
case 2582:
case 201:
case 2274:
case 694:
case 3011:
case 1615:
case 470:
case 2305:
case 3566:
case 350:
case 3905:
case 1004:
case 3670:
case 736:
case 2635:
case 492:
case 2410:
case 3686:
case 3754:
case 3572:
case 618:
case 604:
case 3851:
case 2653:
case 3484:
case 3778:
case 716:
case 2427:
case 2227:
case 1430:
case 1212:
case 2515:
case 1412:
case 291:
case 1230:
case 2244:
case 389:
case 3911:
case 3614:
case 2646:
case 929:
case 2680:
case 949:
case 2311:
case 3869:
case 3005:
case 874:
case 3421:
case 3063:
case 2857:
case 1150:
case 3926:
case 553:
case 7:
case 3192:
case 1043:
case 1318:
case 3317:
case 849:
case 2920:
case 1937:
case 82:
case 4065:
case 4058:
case 2539:
case 177:
case 1109:
case 2917:
case 242:
case 1922:
case 3320:
case 1090:
case 1383:
case 1956:
case 528:
case 548:
case 2864:
case 1639:
case 174:
case 3963:
case 1451:
case 2138:
case 1073:
case 3507:
case 2363:
case 2761:
case 3449:
case 3249:
case 4044:
case 2020:
case 14:
case 2289:
case 2489:
case 376:
case 2992:
case 1943:
case 561:
case 2403:
case 2017:
case 4032:
case 2818:
case 55:
case 3132:
case 3405:
case 90:
case 1345:
case 2629:
case 2707:
case 367:
case 3127:
case 1128:
case 790:
case 1985:
case 3873:
case 2506:
case 2398:
case 3144:
case 1136:
case 1030:
case 3559:
case 562:
case 1357:
case 624:
case 2671:
case 2599:
case 1541:
case 3358:
case 3998:
case 4017:
case 915:
case 2010:
case 2032:
case 256:
case 2965:
case 1336:
case 2198:
case 166:
case 1404:
case 1204:
case 2944:
case 580:
case 1699:
case 1571:
case 627:
case 647:
case 3411:
case 3211:
case 3843:
case 2316:
case 3174:
case 2074:
case 2883:
case 364:
case 1364:
case 1085:
case 1930:
case 221:
case 858:
case 2927:
case 3681:
case 123:
case 2910:
case 143:
case 2809:
case 442:
case 2058:
case 2896:
case 1863:
case 3602:
case 3327:
case 2351:
case 3678:
case 413:
case 1677:
case 2409:
case 183:
case 3391:
case 3625:
case 1021:
case 4031:
case 2296:
case 536:
case 3786:
case 3654:
case 3740:
case 2991:
case 281:
case 2694:
case 1701:
case 2613:
case 1303:
case 295:
case 1079:
case 2762:
case 399:
case 2369:
case 832:
case 1760:
case 335:
case 23:
case 1588:
case 2524:
case 2250:
case 2450:
case 1633:
case 239:
case 3969:
case 2688:
case 2533:
case 1921:
case 1103:
case 883:
case 812:
case 1226:
case 315:
case 3273:
case 3473:
case 3667:
case 1513:
case 3051:
case 1668:
case 1655:
case 132:
case 433:
case 2735:
case 1594:
case 309:
case 3191:
case 30:
case 205:
case 3770:
case 3237:
case 3805:
case 967:
case 3422:
case 2218:
case 1647:
case 1715:
case 2803:
case 976:
case 708:
case 1005:
case 1216:
case 714:
case 737:
case 3733:
case 4091:
case 2236:
case 3682:
case 2666:
case 2475:
case 1725:
case 2642:
case 233:
case 3849:
case 405:
case 3412:
case 3777:
case 2428:
case 2228:
case 2464:
case 393:
case 2570:
case 1754:
case 1640:
case 1686:
case 2540:
case 3004:
case 696:
case 3615:
case 3553:
case 1748:
case 88:
case 2593:
case 2445:
case 481:
case 3485:
case 3285:
case 1298:
case 1498:
case 831:
case 3131:
case 3821:
case 3497:
case 1767:
case 3297:
case 439:
case 2623:
case 2795:
case 2457:
case 2257:
case 3546:
case 1534:
case 303:
case 1313:
case 1711:
case 2603:
case 3187:
case 541:
case 521:
case 1188:
case 1669:
case 4053:
case 2155:
case 1651:
case 1067:
case 2419:
case 2377:
case 3649:
case 2095:
case 1978:
case 152:
case 1925:
case 3024:
case 453:
case 1840:
case 2147:
case 280:
case 1439:
case 4062:
case 262:
case 1870:
case 745:
case 725:
case 3679:
case 906:
case 1194:
case 86:
case 2347:
case 2872:
case 461:
case 778:
case 1589:
case 448:
case 428:
case 1967:
case 3968:
case 2569:
case 2368:
case 3077:
case 475:
case 1366:
case 3878:
case 462:
case 2393:
case 2076:
case 2170:
case 163:
case 984:
case 3986:
case 3751:
case 324:
case 130:
case 1172:
case 2953:
case 2441:
case 667:
case 2813:
case 459:
case 1299:
case 1499:
case 3380:
case 3346:
case 45:
case 228:
case 851:
case 146:
case 379:
case 2980:
case 2035:
case 2946:
case 3176:
case 3070:
case 275:
case 37:
case 1833:
case 1123:
case 1824:
case 3040:
case 3146:
case 3162:
case 3180:
case 863:
case 757:
case 830:
case 2271:
case 664:
case 2471:
case 1868:
case 3093:
case 2114:
case 1855:
case 3376:
case 542:
case 522:
case 2370:
case 3014:
case 2193:
case 1060:
case 3153:
case 3848:
case 4087:
case 2062:
case 1779:
case 110:
case 846:
case 253:
case 1596:
case 1308:
case 947:
case 2563:
case 927:
case 440:
case 420:
case 886:
case 2139:
case 2829:
case 635:
case 3448:
case 699:
case 1119:
case 3637:
case 387:
case 1638:
case 69:
case 2758:
case 3592:
case 436:
case 3673:
case 1455:
case 2552:
case 3798:
case 2871:
case 3267:
case 1550:
case 2288:
case 2488:
case 1224:
case 1785:
case 1233:
case 1433:
case 97:
case 1652:
case 560:
case 1899:
case 2841:
case 2413:
case 2213:
case 792:
case 288:
case 4000:
case 2526:
case 609:
case 3520:
case 4059:
case 384:
case 3454:
case 3107:
case 3254:
case 615:
case 2339:
case 2732:
case 1277:
case 2609:
case 1712:
case 2727:
case 3656:
case 3784:
case 2696:
case 3425:
case 3517:
case 3802:
case 1698:
case 2516:
case 3726:
case 2061:
case 2423:
case 1773:
case 3685:
case 1081:
case 1536:
case 4007:
case 104:
case 3544:
case 488:
case 2808:
case 1528:
case 3100:
case 3215:
case 2059:
case 3415:
case 2645:
case 2717:
case 1329:
case 197:
case 2472:
case 807:
case 3161:
case 1737:
case 1470:
case 3510:
case 3532:
case 306:
case 2961:
case 973:
case 603:
case 1486:
case 1129:
case 1440:
case 240:
case 1902:
case 1839:
case 2819:
case 2900:
case 194:
case 1545:
case 3763:
case 1493:
case 2675:
case 2266:
case 2628:
case 1756:
case 3630:
case 3574:
case 897:
case 236:
case 1171:
case 1214:
case 2959:
case 2234:
case 581:
case 1557:
case 1616:
case 2306:
case 3359:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1756357202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,];
var gg_b = "1756357202/";

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
