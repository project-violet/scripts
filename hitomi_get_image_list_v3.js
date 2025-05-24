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
case 767:
case 1083:
case 3888:
case 2174:
case 4055:
case 852:
case 2583:
case 869:
case 2920:
case 3208:
case 3846:
case 398:
case 3734:
case 2862:
case 3714:
case 1937:
case 2577:
case 2445:
case 1505:
case 2477:
case 900:
case 1146:
case 870:
case 1333:
case 4026:
case 337:
case 2366:
case 2605:
case 3679:
case 4084:
case 594:
case 2773:
case 539:
case 1683:
case 3342:
case 2235:
case 1725:
case 1813:
case 1752:
case 1268:
case 3257:
case 3018:
case 3133:
case 3113:
case 809:
case 589:
case 477:
case 3465:
case 2280:
case 2300:
case 793:
case 921:
case 617:
case 923:
case 117:
case 322:
case 2352:
case 383:
case 884:
case 381:
case 982:
case 3078:
case 504:
case 1189:
case 2490:
case 3187:
case 111:
case 2740:
case 3889:
case 927:
case 613:
case 611:
case 473:
case 471:
case 3173:
case 3619:
case 3938:
case 932:
case 3639:
case 1090:
case 550:
case 333:
case 834:
case 1617:
case 3209:
case 3389:
case 3426:
case 899:
case 1207:
case 703:
case 1395:
case 1520:
case 2293:
case 3692:
case 3760:
case 1945:
case 2905:
case 3678:
case 2437:
case 2537:
case 3771:
case 3774:
case 2134:
case 2114:
case 3422:
case 2111:
case 429:
case 1895:
case 3555:
case 2020:
case 3019:
case 2856:
case 42:
case 3195:
case 3267:
case 3386:
case 3206:
case 3324:
case 38:
case 1043:
case 119:
case 1961:
case 47:
case 3636:
case 145:
case 1964:
case 2108:
case 1970:
case 2510:
case 1654:
case 2530:
case 3012:
case 1769:
case 537:
case 3824:
case 3886:
case 3821:
case 394:
case 2543:
case 2027:
case 1124:
case 1697:
case 2585:
case 400:
case 70:
case 3972:
case 205:
case 339:
case 2793:
case 1030:
case 4041:
case 212:
case 2597:
case 1685:
case 4044:
case 2497:
case 1051:
case 3632:
case 1707:
case 867:
case 1335:
case 2157:
case 1643:
case 2775:
case 2368:
case 1097:
case 4028:
case 3976:
case 3463:
case 1182:
case 2551:
case 1610:
case 1630:
case 3099:
case 1815:
case 423:
case 2191:
case 2627:
case 1380:
case 1200:
case 3147:
case 1954:
case 1768:
case 1951:
case 482:
case 156:
case 656:
case 1225:
case 1664:
case 2109:
case 508:
case 3175:
case 3428:
case 372:
case 2807:
case 2323:
case 427:
case 3849:
case 3528:
case 3672:
case 3250:
case 3791:
case 3794:
case 838:
case 820:
case 2735:
case 2823:
case 2307:
case 1347:
case 3541:
case 863:
case 364:
case 2903:
case 3604:
case 531:
case 9:
case 533:
case 1070:
case 1256:
case 3932:
case 1061:
case 2869:
case 3234:
case 1985:
case 3214:
case 581:
case 801:
case 803:
case 3453:
case 2461:
case 2570:
case 1910:
case 2564:
case 2369:
case 3676:
case 490:
case 1893:
case 266:
case 1600:
case 2640:
case 2179:
case 3546:
case 2562:
case 2877:
case 1210:
case 3060:
case 1230:
case 934:
case 3796:
case 2845:
case 1805:
case 3071:
case 7:
case 378:
case 3488:
case 3602:
case 3006:
case 3588:
case 2633:
case 1956:
case 1062:
case 882:
case 3911:
case 1666:
case 984:
case 1285:
case 3914:
case 2466:
case 3778:
case 55:
case 347:
case 3299:
case 4089:
case 1297:
case 3950:
case 357:
case 1413:
case 1433:
case 3542:
case 2987:
case 559:
case 2040:
case 1000:
case 549:
case 3865:
case 403:
case 1254:
case 2033:
case 1790:
case 562:
case 2500:
case 3606:
case 1440:
case 2118:
case 1181:
case 2552:
case 2452:
case 96:
case 2192:
case 491:
case 969:
case 2940:
case 1900:
case 3631:
case 1473:
case 1052:
case 87:
case 1966:
case 528:
case 3614:
case 952:
case 942:
case 3738:
case 2913:
case 1573:
case 3718:
case 3381:
case 3201:
case 3326:
case 3489:
case 2695:
case 3902:
case 821:
case 324:
case 3822:
case 2196:
case 3855:
case 909:
case 3650:
case 4088:
case 516:
case 3974:
case 860:
case 3971:
case 1777:
case 2673:
case 1122:
case 90:
case 3298:
case 3960:
case 2317:
case 3906:
case 1820:
case 2095:
case 3031:
case 4046:
case 1261:
case 3011:
case 1264:
case 3014:
case 592:
case 1270:
case 3120:
case 1056:
case 3524:
case 3521:
case 362:
case 1803:
case 2843:
case 3424:
case 1668:
case 938:
case 1969:
case 434:
case 1770:
case 1764:
case 2310:
case 49:
case 1761:
case 635:
case 2330:
case 34:
case 3829:
case 2615:
case 873:
case 1827:
case 547:
case 35:
case 1303:
case 315:
case 3798:
case 349:
case 1245:
case 2205:
case 1129:
case 3127:
case 3694:
case 2810:
case 185:
case 1068:
case 3238:
case 2851:
case 578:
case 3863:
case 2854:
case 901:
case 3608:
case 2975:
case 903:
case 2116:
case 2136:
case 3704:
case 1163:
case 2947:
case 1907:
case 2080:
case 1435:
case 2459:
case 3776:
case 3094:
case 276:
case 2354:
case 3363:
case 3091:
case 8:
case 997:
case 1480:
case 727:
case 1923:
case 3716:
case 3667:
case 46:
case 3736:
case 1968:
case 2104:
case 1751:
case 3957:
case 1669:
case 2101:
case 136:
case 469:
case 1007:
case 2980:
case 723:
case 3328:
case 991:
case 993:
case 2075:
case 2423:
case 3994:
case 4082:
case 848:
case 3991:
case 1797:
case 442:
case 452:
case 2693:
case 3292:
case 858:
case 1128:
case 3278:
case 524:
case 2507:
case 1547:
case 3449:
case 316:
case 2935:
case 907:
case 3344:
case 1575:
case 2407:
case 543:
case 1607:
case 877:
case 1743:
case 553:
case 1153:
case 3067:
case 1217:
case 700:
case 1058:
case 3219:
case 3712:
case 1069:
case 3732:
case 4048:
case 2198:
case 1623:
case 2469:
case 2370:
case 2558:
case 3296:
case 2361:
case 3353:
case 2458:
case 4024:
case 534:
case 1890:
case 3550:
case 2573:
case 59:
case 1913:
case 4002:
case 1933:
case 3450:
case 3190:
case 3244:
case 3241:
case 3942:
case 1695:
case 2587:
case 783:
case 804:
case 2181:
case 3892:
case 301:
case 2184:
case 3878:
case 1525:
case 1425:
case 768:
case 1073:
case 1192:
case 457:
case 3228:
case 733:
case 1087:
case 731:
case 3765:
case 1119:
case 3946:
case 959:
case 1095:
case 2820:
case 3819:
case 2264:
case 2625:
case 3253:
case 118:
case 2261:
case 2652:
case 4006:
case 2962:
case 2056:
case 915:
case 1817:
case 2270:
case 320:
case 338:
case 2495:
case 2783:
case 3988:
case 2320:
case 2595:
case 1687:
case 1196:
case 1456:
case 864:
case 3511:
case 3339:
case 962:
case 3319:
case 2155:
case 708:
case 1337:
case 1556:
case 2745:
case 3896:
case 1705:
case 1383:
case 2243:
case 1995:
case 1720:
case 3046:
case 4031:
case 56:
case 3560:
case 1377:
case 3574:
case 2285:
case 2305:
case 3379:
case 3571:
case 2666:
case 2717:
case 367:
case 2737:
case 1640:
case 1883:
case 3506:
case 3229:
case 798:
case 1877:
case 1562:
case 125:
case 424:
case 1462:
case 1845:
case 552:
case 928:
case 930:
case 1033:
case 2254:
case 3838:
case 307:
case 3042:
case 1500:
case 2540:
case 509:
case 1138:
case 1400:
case 2440:
case 453:
case 83:
case 2513:
case 1466:
case 2533:
case 2433:
case 393:
case 894:
case 2165:
case 787:
case 2000:
case 1040:
case 3726:
case 3781:
case 1987:
case 3502:
case 3402:
case 538:
case 2128:
case 2023:
case 4094:
case 3409:
case 1507:
case 2447:
case 1407:
case 1915:
case 3304:
case 561:
case 1935:
case 1176:
case 764:
case 2959:
case 236:
case 2754:
case 3376:
case 1101:
case 2141:
case 2751:
case 3763:
case 2968:
case 1104:
case 1047:
case 1523:
case 3801:
case 1075:
case 3049:
case 4057:
case 957:
case 2623:
case 1172:
case 1198:
case 503:
case 449:
case 883:
case 384:
case 1727:
case 415:
case 978:
case 3898:
case 1558:
case 45:
case 1469:
case 1569:
case 3467:
case 44:
case 614:
case 175:
case 1458:
case 1364:
case 210:
case 675:
case 2730:
case 2710:
case 1361:
case 1220:
case 3170:
case 1675:
case 3649:
case 3948:
case 704:
case 2058:
case 1870:
case 2217:
case 3398:
case 2237:
case 2493:
case 399:
case 2785:
case 1861:
case 2593:
case 2069:
case 4008:
case 1864:
case 1635:
case 3086:
case 3682:
case 1343:
case 2303:
case 370:
case 3130:
case 2129:
case 1385:
case 2245:
case 285:
case 3332:
case 887:
case 3048:
case 507:
case 30:
case 2327:
case 1843:
case 2803:
case 1112:
case 822:
case 73:
case 428:
case 924:
case 2958:
case 794:
case 3753:
case 2764:
case 3143:
case 3832:
case 1459:
case 3316:
case 1351:
case 1468:
case 1015:
case 3265:
case 951:
case 352:
case 3686:
case 3728:
case 2923:
case 941:
case 943:
case 3816:
case 898:
case 3491:
case 492:
case 3494:
case 2068:
case 3399:
case 2059:
case 369:
case 1851:
case 1116:
case 1975:
case 2515:
case 567:
case 2435:
case 36:
case 3154:
case 2907:
case 3151:
case 1852:
case 422:
case 1825:
case 57:
case 1733:
case 2617:
case 3478:
case 2637:
case 377:
case 2373:
case 3492:
case 487:
case 3742:
case 1275:
case 4038:
case 4018:
case 1620:
case 2387:
case 2207:
case 1247:
case 880:
case 1150:
case 3084:
case 743:
case 213:
case 437:
case 2700:
case 3081:
case 753:
case 2887:
case 751:
case 939:
case 3156:
case 3831:
case 892:
case 3811:
case 498:
case 994:
case 2690:
case 2762:
case 3814:
case 2017:
case 1856:
case 93:
case 4079:
case 521:
case 3684:
case 2420:
case 358:
case 3681:
case 2983:
case 3055:
case 3314:
case 2945:
case 1293:
case 1356:
case 2977:
case 1537:
case 32:
case 1920:
case 3162:
case 1483:
case 1795:
case 3806:
case 3248:
case 527:
case 1577:
case 2405:
case 3360:
case 2917:
case 329:
case 1862:
case 802:
case 2146:
case 408:
case 904:
case 3579:
case 2505:
case 1545:
case 3922:
case 1160:
case 3955:
case 1174:
case 3286:
case 3221:
case 3860:
case 1005:
case 3874:
case 3871:
case 2752:
case 1102:
case 2833:
case 2813:
case 862:
case 964:
case 2990:
case 2268:
case 2340:
case 3166:
case 431:
case 433:
case 972:
case 2333:
case 815:
case 373:
case 3438:
case 3418:
case 3518:
case 3302:
case 1800:
case 3065:
case 3984:
case 1235:
case 483:
case 3926:
case 849:
case 4092:
case 481:
case 548:
case 922:
case 2997:
case 606:
case 1287:
case 1307:
case 1823:
case 3401:
case 1715:
case 360:
case 3501:
case 3309:
case 987:
case 3782:
case 3028:
case 3963:
case 246:
case 2768:
case 2954:
case 3107:
case 2149:
case 1109:
case 2664:
case 256:
case 3653:
case 2252:
case 2759:
case 2847:
case 3809:
case 937:
case 4016:
case 1780:
case 3041:
case 3721:
case 1927:
case 3724:
case 3929:
case 3628:
case 728:
case 1570:
case 43:
case 1461:
case 195:
case 2893:
case 166:
case 494:
case 1470:
case 998:
case 666:
case 489:
case 841:
case 3748:
case 1903:
case 2943:
case 577:
case 344:
case 1167:
case 37:
case 3641:
case 3572:
case 3867:
case 1858:
case 2070:
case 379:
case 2985:
case 3053:
case 2061:
case 2393:
case 1443:
case 2403:
case 390:
case 857:
case 3288:
case 3308:
case 1027:
case 573:
case 4072:
case 2503:
case 1543:
case 3412:
case 404:
case 908:
case 2124:
case 762:
case 2030:
case 1485:
case 1793:
case 3512:
case 105:
case 759:
case 3808:
case 3246:
case 219:
case 1003:
case 2043:
case 749:
case 715:
case 2148:
case 1108:
case 3953:
case 2961:
case 450:
case 2769:
case 2262:
case 3663:
case 2654:
case 2970:
case 196:
case 968:
case 2097:
case 1454:
case 696:
case 2630:
case 702:
case 665:
case 2610:
case 2182:
case 1551:
case 3891:
case 165:
case 5:
case 3629:
case 2815:
case 3928:
case 2380:
case 2200:
case 1240:
case 1194:
case 1868:
case 4004:
case 612:
case 2266:
case 112:
case 52:
case 1233:
case 3391:
case 2315:
case 981:
case 3944:
case 983:
case 3168:
case 382:
case 1775:
case 1603:
case 2643:
case 529:
case 3159:
case 3564:
case 3369:
case 3470:
case 2072:
case 395:
case 2453:
case 1367:
case 204:
case 1721:
case 3927:
case 4030:
case 4010:
case 679:
case 2231:
case 1053:
case 1472:
case 3869:
case 179:
case 2214:
case 1867:
case 1572:
case 2912:
case 4043:
case 1641:
case 1644:
case 2604:
case 67:
case 1169:
case 41:
case 644:
case 1158:
case 240:
case 1748:
case 455:
case 1504:
case 2544:
case 660:
case 1028:
case 2349:
case 1309:
case 1289:
case 2541:
case 264:
case 160:
case 3715:
case 2441:
case 3287:
case 2444:
case 623:
case 621:
case 2076:
case 123:
case 1123:
case 2999:
case 2001:
case 1041:
case 2849:
case 2528:
case 786:
case 2428:
case 272:
case 2916:
case 1576:
case 1963:
case 2757:
case 2882:
case 3191:
case 3627:
case 3194:
case 3240:
case 632:
case 1928:
case 1436:
case 3359:
case 1894:
case 2099:
case 2135:
case 3454:
case 2115:
case 1357:
case 1516:
case 2976:
case 3451:
case 1536:
case 396:
case 3603:
case 2709:
case 2382:
case 1242:
case 2202:
case 3775:
case 1941:
case 3747:
case 182:
case 456:
case 2904:
case 1168:
case 682:
case 3157:
case 1394:
case 3497:
case 1599:
case 3859:
case 1391:
case 1063:
case 2632:
case 2016:
case 312:
case 1857:
case 911:
case 3868:
case 2972:
case 1512:
case 305:
case 1532:
case 239:
case 2274:
case 1432:
case 2271:
case 23:
case 690:
case 2824:
case 0:
case 2821:
case 3443:
case 190:
case 294:
case 3510:
case 3530:
case 2032:
case 2616:
case 2767:
case 2636:
case 3108:
case 3410:
case 28:
case 2429:
case 3003:
case 2386:
case 1246:
case 2529:
case 1808:
case 785:
case 4064:
case 3856:
case 2267:
case 2019:
case 2039:
case 2522:
case 2555:
case 1746:
case 2455:
case 3114:
case 2422:
case 3131:
case 3111:
case 836:
case 1439:
case 1419:
case 2771:
case 2096:
case 2774:
case 3293:
case 2760:
case 1519:
case 2979:
case 3417:
case 3437:
case 4077:
case 1055:
case 1022:
case 1681:
case 1626:
case 658:
case 945:
case 2426:
case 2484:
case 2584:
case 2389:
case 3275:
case 1742:
case 2702:
case 1152:
case 268:
case 1350:
case 2619:
case 2938:
case 3825:
case 2918:
case 233:
case 417:
case 3852:
case 2173:
case 2889:
case 3150:
case 3490:
case 281:
case 3325:
case 3590:
case 1850:
case 2133:
case 835:
case 3280:
case 3300:
case 2038:
case 1981:
case 1926:
case 1984:
case 1065:
case 505:
case 1789:
case 237:
case 2992:
case 3366:
case 411:
case 3605:
case 3773:
case 1518:
case 1418:
case 2294:
case 1438:
case 173:
case 2140:
case 1100:
case 2750:
case 2919:
case 2618:
case 3106:
case 1371:
case 2734:
case 3862:
case 2714:
case 129:
case 629:
case 3445:
case 3577:
case 1248:
case 2208:
case 2846:
case 1806:
case 3483:
case 62:
case 3583:
case 12:
case 3920:
case 1:
case 1874:
case 3005:
case 2079:
case 3362:
case 1306:
case 3171:
case 1665:
case 2888:
case 1955:
case 3361:
case 3364:
case 3569:
case 3469:
case 1567:
case 3370:
case 280:
case 1921:
case 684:
case 485:
case 3172:
case 1222:
case 2239:
case 2732:
case 3861:
case 199:
case 2067:
case 1398:
case 3703:
case 2609:
case 230:
case 435:
case 3220:
case 1301:
case 2341:
case 3176:
case 216:
case 3935:
case 1284:
case 2828:
case 2549:
case 3915:
case 1409:
case 1982:
case 2292:
case 1876:
case 2799:
case 2991:
case 292:
case 3523:
case 3047:
case 4059:
case 1376:
case 2716:
case 2667:
case 2736:
case 642:
case 142:
case 1686:
case 3035:
case 652:
case 1899:
case 3559:
case 2094:
case 376:
case 3468:
case 2363:
case 2091:
case 1316:
case 3568:
case 1557:
case 3897:
case 66:
case 2701:
case 3080:
case 1154:
case 2608:
case 2909:
case 3116:
case 202:
case 1591:
case 2863:
case 669:
case 1594:
case 2238:
case 1494:
case 1836:
case 1491:
case 2127:
case 2694:
case 3810:
case 249:
case 2279:
case 745:
case 25:
case 3343:
case 215:
case 1682:
case 71:
case 755:
case 2829:
case 1832:
case 2103:
case 1812:
case 3310:
case 609:
case 3885:
case 2486:
case 60:
case 2421:
case 3132:
case 3680:
case 2524:
case 4069:
case 2008:
case 2329:
case 2521:
case 262:
case 2586:
case 3817:
case 2120:
case 3837:
case 1396:
case 2031:
case 1253:
case 2011:
case 318:
case 2014:
case 1137:
case 846:
case 188:
case 1946:
case 856:
case 3119:
case 3139:
case 688:
case 2779:
case 3337:
case 2960:
case 1534:
case 663:
case 1319:
case 1514:
case 661:
case 1511:
case 2822:
case 2855:
case 638:
case 620:
case 224:
case 2489:
case 3695:
case 2201:
case 4066:
case 3933:
case 243:
case 2738:
case 3913:
case 2631:
case 197:
case 253:
case 1550:
case 3890:
case 1378:
case 1765:
case 1228:
case 1089:
case 575:
case 2826:
case 3192:
case 3073:
case 3425:
case 3525:
case 1878:
case 3390:
case 101:
case 3552:
case 326:
case 103:
case 4052:
case 845:
case 4025:
case 3118:
case 855:
case 2236:
case 607:
case 819:
case 1402:
case 2442:
case 1502:
case 2542:
case 1781:
case 3987:
case 1726:
case 3040:
case 693:
case 691:
case 257:
case 3566:
case 3973:
case 247:
case 167:
case 2911:
case 1571:
case 2934:
case 1460:
case 3345:
case 1474:
case 1560:
case 3633:
case 1471:
case 2719:
case 2232:
case 1046:
case 2006:
case 910:
case 3995:
case 278:
case 2488:
case 3203:
case 1642:
case 1879:
case 3845:
case 2071:
case 325:
case 3562:
case 3877:
case 1088:
case 2105:
case 1145:
case 3179:
case 1229:
case 2546:
case 1406:
case 3883:
case 3227:
case 3640:
case 3435:
case 2154:
case 796:
case 2741:
case 1701:
case 1582:
case 2744:
case 1704:
case 926:
case 2949:
case 3515:
case 765:
case 602:
case 269:
case 1863:
case 2836:
case 1057:
case 2728:
case 242:
case 712:
case 2265:
case 2197:
case 2624:
case 252:
case 1363:
case 2457:
case 1094:
case 1776:
case 2899:
case 2557:
case 2336:
case 2316:
case 3958:
case 1967:
case 3659:
case 2812:
case 2832:
case 1103:
case 3969:
case 20:
case 1424:
case 3327:
case 3803:
case 1421:
case 1486:
case 1586:
case 2185:
case 705:
case 2048:
case 1524:
case 385:
case 1691:
case 1694:
case 1127:
case 649:
case 1279:
case 3245:
case 1772:
case 2682:
case 115:
case 3303:
case 174:
case 15:
case 2408:
case 1448:
case 475:
case 918:
case 2508:
case 1829:
case 2024:
case 4093:
case 64:
case 414:
case 2021:
case 3069:
case 1239:
case 3217:
case 2398:
case 3785:
case 2372:
case 130:
case 234:
case 2649:
case 795:
case 1908:
case 3743:
case 2170:
case 2467:
case 310:
case 1353:
case 3710:
case 2872:
case 2898:
case 2567:
case 680:
case 2986:
case 284:
case 2222:
case 3623:
case 1841:
case 1844:
case 2804:
case 1328:
case 2376:
case 3658:
case 4080:
case 3447:
case 2509:
case 1549:
case 616:
case 116:
case 2226:
case 2301:
case 3023:
case 1449:
case 2409:
case 4015:
case 1991:
case 426:
case 2989:
case 1865:
case 585:
case 2726:
case 1542:
case 4073:
case 1671:
case 157:
case 2318:
case 1950:
case 3165:
case 2338:
case 1660:
case 1792:
case 647:
case 147:
case 3513:
case 1778:
case 1365:
case 2646:
case 1606:
case 2042:
case 1002:
case 2838:
case 2818:
case 3925:
case 207:
case 3251:
case 2263:
case 3254:
case 1071:
case 3805:
case 3230:
case 896:
case 2755:
case 2722:
case 2229:
case 3600:
case 865:
case 1914:
case 3285:
case 2571:
case 1911:
case 267:
case 3737:
case 1232:
case 1212:
case 4095:
case 2560:
case 914:
case 418:
case 1602:
case 2642:
case 678:
case 3155:
case 2414:
case 1298:
case 1779:
case 3745:
case 1272:
case 3777:
case 263:
case 2511:
case 2531:
case 2339:
case 1650:
case 2319:
case 2534:
case 3320:
case 1855:
case 1822:
case 124:
case 3495:
case 624:
case 3962:
case 2396:
case 3056:
case 3270:
case 2819:
case 2839:
case 3625:
case 1034:
case 3261:
case 3652:
case 1031:
case 1322:
case 3820:
case 288:
case 2765:
case 895:
case 1881:
case 2089:
case 1884:
case 2228:
case 3181:
case 2892:
case 201:
case 2878:
case 2942:
case 1902:
case 4033:
case 4013:
case 3587:
case 1589:
case 2190:
case 1384:
case 2244:
case 1204:
case 1381:
case 1201:
case 1718:
case 141:
case 1738:
case 143:
case 3656:
case 643:
case 641:
case 2378:
case 651:
case 1614:
case 653:
case 1634:
case 3966:
case 153:
case 3052:
case 1631:
case 1202:
case 2242:
case 2749:
case 3643:
case 3707:
case 1632:
case 3051:
case 1612:
case 2391:
case 1180:
case 2394:
case 2857:
case 3685:
case 3266:
case 825:
case 406:
case 3835:
case 2629:
case 2894:
case 2891:
case 2536:
case 1976:
case 2357:
case 1115:
case 1135:
case 3769:
case 189:
case 1012:
case 355:
case 3654:
case 3964:
case 3148:
case 517:
case 345:
case 3961:
case 1767:
case 1616:
case 319:
case 68:
case 3427:
case 2808:
case 1848:
case 1206:
case 3030:
case 139:
case 2532:
case 2512:
case 3186:
case 2412:
case 3121:
case 2432:
case 1274:
case 3124:
case 13:
case 3503:
case 63:
case 290:
case 466:
case 2029:
case 2498:
case 2472:
case 2053:
case 1211:
case 3061:
case 3393:
case 1231:
case 3256:
case 2598:
case 3070:
case 2644:
case 150:
case 254:
case 2641:
case 2748:
case 775:
case 3943:
case 244:
case 3893:
case 1676:
case 511:
case 4027:
case 3910:
case 1098:
case 2367:
case 1453:
case 1072:
case 104:
case 826:
case 2929:
case 604:
case 2721:
case 1849:
case 1528:
case 2044:
case 3875:
case 2041:
case 1001:
case 3847:
case 1936:
case 2653:
case 356:
case 3759:
case 1757:
case 3951:
case 2963:
case 3768:
case 3954:
case 260:
case 1541:
case 2782:
case 2028:
case 1544:
case 2504:
case 1441:
case 2401:
case 1076:
case 1794:
case 221:
case 3997:
case 1250:
case 1999:
case 1672:
case 2981:
case 2789:
case 2302:
case 1342:
case 3683:
case 3840:
case 637:
case 1679:
case 3645:
case 1992:
case 137:
case 3313:
case 2100:
case 2438:
case 1294:
case 2418:
case 545:
case 906:
case 622:
case 1565:
case 1465:
case 3340:
case 555:
case 1113:
case 1133:
case 187:
case 3990:
case 519:
case 3259:
case 1079:
case 3077:
case 1888:
case 2665:
case 1346:
case 2221:
case 2955:
case 3146:
case 2371:
case 1618:
case 1939:
case 2579:
case 3756:
case 3405:
case 2479:
case 4020:
case 1731:
case 198:
case 1846:
case 966:
case 1388:
case 1208:
case 725:
case 22:
case 1774:
case 2419:
case 1771:
case 2539:
case 1979:
case 2519:
case 2311:
case 1692:
case 248:
case 3983:
case 2788:
case 3395:
case 4005:
case 3420:
case 258:
case 2626:
case 3258:
case 2596:
case 2811:
case 2496:
case 3269:
case 2814:
case 2746:
case 3895:
case 905:
case 1522:
case 556:
case 1455:
case 2655:
case 912:
case 2965:
case 3700:
case 311:
case 1696:
case 1187:
case 1078:
case 683:
case 681:
case 1092:
case 1484:
case 3387:
case 2152:
case 1581:
case 1209:
case 2249:
case 2125:
case 668:
case 3766:
case 3617:
case 3373:
case 2592:
case 133:
case 131:
case 1918:
case 631:
case 2578:
case 3090:
case 1639:
case 2350:
case 1619:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1748127601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,];
var gg_b = "1748127601/";

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
